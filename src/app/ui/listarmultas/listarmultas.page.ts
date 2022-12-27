import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Multa } from 'src/app/models/multa';
import { MultasService } from 'src/app/service/multas.service';
import { ReportesService } from 'src/app/service/reportes.service';

@Component({
  selector: 'app-listarmultas',
  templateUrl: './listarmultas.page.html',
  styleUrls: ['./listarmultas.page.scss'],
})
export class ListarmultasPage implements OnInit {

  multas: Multa[] = [];
  estado: boolean;

  constructor(
    private multaService: MultasService,
    private toastController: ToastController, 
    private reportesService: ReportesService
  ) { }

  ngOnInit() {
    this.cargarLista();
  }
  
  cargarLista(): void {
    this.multaService.listaMultas().subscribe(
      data => {
        this.multas = data;
        if(this.multas.length != 0){
          this.estado = true;
        }
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  imprimir(): void {
    const encabezado = ["Multa (Bs)", "Fecha vigencia", "Pagado"];

    var cuerpo: any[] = [];
    for(let x of this.multas){  
      cuerpo.push([x.monto, x.fechaVigencia, x.estado]);
    }

    this.reportesService.imprimir(encabezado, cuerpo, "Listado de multas", true);
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
