import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Medidor } from 'src/app/models/medidor';
import { MedidorService } from 'src/app/service/medidor.service';
import { ReportesService } from 'src/app/service/reportes.service';

@Component({
  selector: 'app-listarmedidores',
  templateUrl: './listarmedidores.page.html',
  styleUrls: ['./listarmedidores.page.scss'],
})
export class ListarmedidoresPage implements OnInit {

  medidores: Medidor[] = [];
  estado: boolean;

  constructor(
    private medidorService: MedidorService, 
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
    this.medidorService.listaMedidores().subscribe(
      data => {
        this.medidores = data;
        if(this.medidores.length != 0){
          this.estado = true;
        }
      }, 
      err => {
        this.presentToast(err.error.message);
      }
    );
  }

  imprimir(): void {
    const encabezado = ["Marca", "Serial", "Fecha de instalación"];

    var cuerpo: any[] = [];
    for(let x of this.medidores){
      cuerpo.push([x.marca, x.serial, x.fechaInstalacion]);
    }

    this.reportesService.imprimir(encabezado, cuerpo, "Listado de medidores", true);
  }

  eliminarMedidor(id: number): void {
    this.medidorService.eliminarMedidor(Number(id)).subscribe(
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
            this.eliminarMedidor(Number(id));
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
