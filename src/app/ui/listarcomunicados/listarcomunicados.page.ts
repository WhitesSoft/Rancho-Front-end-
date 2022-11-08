import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Comunicado } from 'src/app/models/comunicado';
import { ComunicadoService } from 'src/app/service/comunicado.service';

@Component({
  selector: 'app-listarcomunicados',
  templateUrl: './listarcomunicados.page.html',
  styleUrls: ['./listarcomunicados.page.scss'],
})
export class ListarcomunicadosPage implements OnInit {

  comunicados: Comunicado[] = [];

  constructor(
    private comunicadoService: ComunicadoService, 
    private toastController: ToastController, 
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  ionViewWillEnter() {
    this.cargarLista();
  }

  cargarLista(): void {
    this.comunicadoService.listaComunicados().subscribe(
      data => {
        this.comunicados = data;
      }, 
      err => {
        this.presentToast(err.error.message);
      }
    );
  }

  eliminarComunicado(id: number): void {
    this.comunicadoService.eliminarComunicado(Number(id)).subscribe(
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
            this.eliminarComunicado(Number(id));
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
