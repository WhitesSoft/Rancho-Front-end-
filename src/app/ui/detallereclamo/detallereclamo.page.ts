import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Reclamo } from 'src/app/models/reclamo';
import ReclamoService from 'src/app/service/reclamo.service';
import { SocioService } from 'src/app/service/socio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-detallereclamo',
  templateUrl: './detallereclamo.page.html',
  styleUrls: ['./detallereclamo.page.scss'],
})
export class DetallereclamoPage implements OnInit {

  reclamo: Reclamo;
  estado = '';
  estadoReclamo: boolean;
  nombreSocio = '';
  isUser: boolean;


  constructor(
    private reclamoService: ReclamoService,
    private socioService: SocioService,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => this.cargarInformacion(), 2000);
  }

  cargarInformacion(): void {

    //vemos el rol del usuario
    var rol = this.tokenService.getAuthorities();
    rol.forEach(ele =>{
      var x: string = ele['authority'];
      if (x.substring(5) == 'USER')
        this.isUser = true;
    });
    

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.reclamoService.detallesReclamo(Number(id)).subscribe(
      data => {
        this.reclamo = data;

        //Verificamos si fue atendido la solicitud
        if (data.atendido == true) {
          this.estado = 'Atentido';
          this.estadoReclamo = true;
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

          //Aqui solo obtenemos los reclamos que tiene cada socio
          var x = ele["reclamos"][0];
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
      message: '¿Seguro que deseas atender el reclamo?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {

            //modificamos la solicitud
            this.reclamo.atendido = true;
            this.reclamo.fechaAtencion = new Date().toISOString().split('T')[0];
            this.reclamoService.actualizarReclamo(Number(id), this.reclamo).subscribe(
              data => {
                this.presentToast("Reclamo atendido");
                this.router.navigate(['/listarreclamos']);
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
