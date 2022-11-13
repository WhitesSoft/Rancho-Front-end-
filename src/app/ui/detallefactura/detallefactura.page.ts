import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/service/factura.service';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-detallefactura',
  templateUrl: './detallefactura.page.html',
  styleUrls: ['./detallefactura.page.scss'],
})
export class DetallefacturaPage implements OnInit {

  factura: Factura;
  estado = '';

  constructor(
    private facturaService: FacturaService,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    setTimeout(() => this.cargarInformacion(), 2000);
  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.facturaService.detallesFactura(Number(id)).subscribe(
      data => {
        this.factura = data;
        if (data.estado) {
          this.estado = 'Pagado'
        } else {
          this.estado = 'Sin pagar'
        }
      },
      err => {
        this.presentToast('No se pudo cargar la información');
      }
    );

  }

  imprimir(): void {

    let content = document.getElementById("contenido");
    let html = htmlToPdfmake(content.innerHTML);

    const documentDefinition = {
      pageSize: {
        width: 350.28,
        height: 'auto'
      },
      pageOrientation: 'portrait',
      content: html
    };

    pdfMake.createPdf(documentDefinition).open();

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
