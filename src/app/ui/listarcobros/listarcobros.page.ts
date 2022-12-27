import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Cobro } from 'src/app/models/cobro';
import { CobroService } from 'src/app/service/cobro.service';
import { ReportesService } from 'src/app/service/reportes.service';

@Component({
  selector: 'app-listarcobros',
  templateUrl: './listarcobros.page.html',
  styleUrls: ['./listarcobros.page.scss'],
})
export class ListarcobrosPage implements OnInit {

  cobros: Cobro[] = [];
  estado: boolean;

  constructor(
    private cobroService: CobroService,
    private toastController: ToastController, 
    private reportesService: ReportesService
  ) { }

  ngOnInit() {
    this.cargarLista();
  }
  
  cargarLista(): void {
    this.cobroService.listaCobros().subscribe(
      data => {
        this.cobros = data;
        if(this.cobros.length != 0){
          this.estado = true;
        }
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  imprimir(): void {
    const encabezado = ["Monto", "Fecha y hora del cobro"];

    var cuerpo: any[] = [];
    for(let x of this.cobros){
      cuerpo.push([x.monto, x.fechaHora]);
    }

    this.reportesService.imprimir(encabezado, cuerpo, "Listado de cobros", true);
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
