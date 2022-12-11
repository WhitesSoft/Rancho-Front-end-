import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Comunicado } from 'src/app/models/comunicado';
import { ComunicadoService } from 'src/app/service/comunicado.service';
import { ReportesService } from 'src/app/service/reportes.service';

@Component({
  selector: 'app-listarcomunicados',
  templateUrl: './listarcomunicados.page.html',
  styleUrls: ['./listarcomunicados.page.scss'],
})
export class ListarcomunicadosPage implements OnInit {

  comunicados: Comunicado[] = [];
  estado: boolean;

  constructor(
    private comunicadoService: ComunicadoService, 
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
    this.comunicadoService.listaComunicados().subscribe(
      data => {
        this.comunicados = data;
        if(this.comunicados.length != 0){
          this.estado = true;
        }
      }, 
      err => {
        this.presentToast(err.error.message);
      }
    );
  }

  imprimir(): void {
    const encabezado = ["Descripcion", "Fecha de inicio", "Vigencia (dias)"];

    var cuerpo: any[] = [];
    for(let x of this.comunicados){
      cuerpo.push([x.descripcion, x.fechaInicio, x.vigencia]);
    }

    this.reportesService.imprimir(encabezado, cuerpo, "Listado de comunicados", true);
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
