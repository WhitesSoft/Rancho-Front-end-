import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Tarifa } from 'src/app/models/tarifa';
import { TarifaService } from 'src/app/service/tarifa.service';

@Component({
  selector: 'app-listartarifas',
  templateUrl: './listartarifas.page.html',
  styleUrls: ['./listartarifas.page.scss'],
})
export class ListartarifasPage implements OnInit {

  tarifas: Tarifa[] = [];

  tarifasFechas: any[] = [];
  fechaFormateada: string;

  constructor(
    private tarifaService: TarifaService, 
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
    this.tarifaService.listaTarifas().subscribe(
      data => {
        this.tarifas = data;  
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  eliminarTarifa(id: number): void {
    this.tarifaService.eliminarTarifa(Number(id)).subscribe(
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
            this.eliminarTarifa(Number(id));
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
