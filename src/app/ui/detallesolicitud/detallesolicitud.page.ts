import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Solicitud } from 'src/app/models/solicitud';
import { SocioService } from 'src/app/service/socio.service';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-detallesolicitud',
  templateUrl: './detallesolicitud.page.html',
  styleUrls: ['./detallesolicitud.page.scss'],
})
export class DetallesolicitudPage implements OnInit {

  solicitud: Solicitud;
  estado = '';
  estadoSolicitud: boolean;
  nombreSocio = '';

  constructor(
    private solicitudService: SolicitudService,
    private socioService: SocioService,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => this.cargarInformacion(), 2000);
  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.solicitudService.detallesSolicitud(Number(id)).subscribe(
      data => {
        this.solicitud = data;

        //Verificamos si fue atendido la solicitud
        if (data.atendido == true) {
          this.estado = 'Atentido';
          this.estadoSolicitud = true;
        } else {
          this.estado = 'No atendido';
        }

      },
      err => {
        this.presentToast('No se pudo cargar la información');
      }
    );


    //Listamos todos los socios
    this.socioService.listaSocios().subscribe(
      data => {

        data.forEach(ele => {

          //Aqui solo obtenemos las solicitudes que tiene cada socio
          var x = ele["solicitudes"][0];
          if (x != null) {
            //Aqui verificamos que el id(global) que tiene la pagina sea igual con 
            //con algun id de las solicitudes encontradas
            //Si es asi obtenemos el nombre del socio
            if (x.id == id)
              this.nombreSocio = ele.nombres + " " + ele.apellidos;
          }

        });

      }
    );

  }

  async atender(id: Number) {

    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas atender la solicitud?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {

            //modificamos la solicitud
            this.solicitud.atendido = true;
            this.solicitudService.actualizarSolicitud(Number(id), this.solicitud).subscribe(
              data => {
                this.presentToast("Solicitud atendida");
                this.router.navigate(['/listarsolicitudes']);
              }
            );

          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();

  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
