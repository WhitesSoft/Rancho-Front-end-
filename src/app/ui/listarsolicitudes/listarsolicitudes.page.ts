import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-listarsolicitudes',
  templateUrl: './listarsolicitudes.page.html',
  styleUrls: ['./listarsolicitudes.page.scss'],
})
export class ListarsolicitudesPage implements OnInit {

  solicitudes: Solicitud[] = [];
  socio = '';

  constructor(
    private solicitudService: SolicitudService, 
    private toastController: ToastController, 
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(): void {

    this.solicitudService.listaSolicitudes().subscribe(
      data => {
        this.solicitudes = data;
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );

  }

  eliminarSolicitud(id: number): void {
    this.solicitudService.eliminarSolicitud(Number(id)).subscribe(
      data => {
        this.presentToast(data.mensaje);
        this.cargarLista();
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  async borrarConfirm(id: Number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que lo deseas eliminar?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.eliminarSolicitud(Number(id));
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
