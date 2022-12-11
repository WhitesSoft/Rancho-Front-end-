import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/service/factura.service';
import { ReportesService } from 'src/app/service/reportes.service';

@Component({
  selector: 'app-listarfacturas',
  templateUrl: './listarfacturas.page.html',
  styleUrls: ['./listarfacturas.page.scss'],
})
export class ListarfacturasPage implements OnInit {

  facturas: Factura[] = [];
  estado: boolean;

  constructor(
    private facturaService: FacturaService,
    private toastController: ToastController, 
    private reportesService: ReportesService
  ) { }

  ngOnInit() {
    this.cargarLista();
  }
  
  cargarLista(): void {
    this.facturaService.listaFacturas().subscribe(
      data => {
        this.facturas = data;
        if(this.facturas.length != 0){
          this.estado = true;
        }
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  imprimir(): void {
    const encabezado = ["Razon social", "NIT", "Monto", "Fecha"];

    var cuerpo: any[] = [];
    for(let x of this.facturas){
      cuerpo.push([x.razonSocial, x.nit, x.monto, x.periodo]);
    }

    this.reportesService.imprimir(encabezado, cuerpo, "Listado de facturas", true);
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
