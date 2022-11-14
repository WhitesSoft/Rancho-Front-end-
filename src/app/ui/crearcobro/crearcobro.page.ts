import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Cobro } from 'src/app/models/cobro';
import { Factura } from 'src/app/models/factura';
import { CobroService } from 'src/app/service/cobro.service';
import { FacturaService } from 'src/app/service/factura.service';

@Component({
  selector: 'app-crearcobro',
  templateUrl: './crearcobro.page.html',
  styleUrls: ['./crearcobro.page.scss'],
})
export class CrearcobroPage implements OnInit {

  factura: Factura;
  estado = '';
  estadoFactura: boolean;


  constructor(
    private cobroSerive: CobroService,
    private facturaService: FacturaService,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController, 
    private router: Router
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
          this.estadoFactura = true;
        } else {
          this.estado = 'Sin pagar'
        }
      },
      err => {
        this.presentToast('No se pudo cargar la información');
      }
    );

  }

  Pagar(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');


    //formateamos la fecha
    moment.locale('es');
    var fechaHora = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
   

    //factura
    var nuevaFactura = new Factura(this.factura.razonSocial, this.factura.nit, this.factura.periodo, 
      this.factura.monto, false);
     
    var monto = this.factura.monto;
    
    console.log(monto);
    
    
    console.log(nuevaFactura);
      

    //creamos nuestro cobro
    const cobro = new Cobro(fechaHora, monto, nuevaFactura);

    this.cobroSerive.crearCobro(cobro).subscribe(
      data => {
        //Actualizamos la factura
        // const facturaActualizada = new Factura(this.factura.razonSocial, this.factura.nit, this.factura.periodo, 
        //   this.factura.monto, true);
        this.factura.estado = true;  

        this.facturaService.actualizarFactura(Number(id), this.factura).subscribe();
        
        this.presentToast('Pago realizado');
        this.router.navigate(['/main']);
      }, 
      err => {
        console.log(err); 
      }
    );

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
