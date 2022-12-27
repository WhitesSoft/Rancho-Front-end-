import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Tarifa } from 'src/app/models/tarifa';
import { ReportesService } from 'src/app/service/reportes.service';
import { TarifaService } from 'src/app/service/tarifa.service';

@Component({
  selector: 'app-listartarifas',
  templateUrl: './listartarifas.page.html',
  styleUrls: ['./listartarifas.page.scss'],
})
export class ListartarifasPage implements OnInit {

  tarifas: Tarifa[] = [];
  estado: boolean;
  tarifasFechas: any[] = [];
  fechaFormateada: string;

  constructor(
    private tarifaService: TarifaService, 
    private toastController: ToastController, 
    private alertController: AlertController,
    private reportesService: ReportesService
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
        if(this.tarifas.length != 0){
          this.estado = true;
        }
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  imprimir(): void {
    const encabezado = ["Costo unitario", "Consumo maximo", "Fecha de inicio"];

    var cuerpo: any[] = [];
    for(let x of this.tarifas){
      cuerpo.push([x.costoUnitario, x.consumoMaximo, x.fechaInicio]);
    }

    this.reportesService.imprimir(encabezado, cuerpo, "Listado de tarifas", true);
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
