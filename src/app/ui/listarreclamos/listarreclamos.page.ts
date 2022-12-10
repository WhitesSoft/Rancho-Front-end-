import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Reclamo } from 'src/app/models/reclamo';
import ReclamoService from 'src/app/service/reclamo.service';

@Component({
  selector: 'app-listarreclamos',
  templateUrl: './listarreclamos.page.html',
  styleUrls: ['./listarreclamos.page.scss'],
})
export class ListarreclamosPage implements OnInit {

  reclamos: Reclamo[] = [];

  constructor(
    private reclamoService: ReclamoService, 
    private toastController: ToastController, 
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(): void {

    this.reclamoService.listaReclamos().subscribe(
      data => {
        this.reclamos = data;
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );

  }

  eliminarReclamo(id: number): void {
    this.reclamoService.eliminarReclamo(Number(id)).subscribe(
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
            this.eliminarReclamo(Number(id));
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
