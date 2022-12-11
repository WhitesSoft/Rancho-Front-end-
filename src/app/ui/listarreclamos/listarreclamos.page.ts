import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Reclamo } from 'src/app/models/reclamo';
import ReclamoService from 'src/app/service/reclamo.service';
import { ReportesService } from 'src/app/service/reportes.service';

@Component({
  selector: 'app-listarreclamos',
  templateUrl: './listarreclamos.page.html',
  styleUrls: ['./listarreclamos.page.scss'],
})
export class ListarreclamosPage implements OnInit {

  reclamos: Reclamo[] = [];
  estado: boolean;

  constructor(
    private reclamoService: ReclamoService, 
    private toastController: ToastController, 
    private alertController: AlertController,
    private reportesService: ReportesService
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(): void {

    this.reclamoService.listaReclamos().subscribe(
      data => {
        this.reclamos = data;
        if(this.reclamos.length != 0){
          this.estado = true;
        }
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );

  }

  imprimir(): void {
    const encabezado = ["Detalle reclamo", "Fecha"];

    var cuerpo: any[] = [];
    for(let x of this.reclamos){
      cuerpo.push([x.detalle, x.fecha]);
    }

    this.reportesService.imprimir(encabezado, cuerpo, "Listado de reclamos", true);
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
