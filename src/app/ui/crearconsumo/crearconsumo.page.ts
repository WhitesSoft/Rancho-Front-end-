import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Consumo } from 'src/app/models/consumo';
import { Factura } from 'src/app/models/factura';
import { Medidor } from 'src/app/models/medidor';
import { ConsumoService } from 'src/app/service/consumo.service';
import { MedidorService } from 'src/app/service/medidor.service';
import { SocioService } from 'src/app/service/socio.service';
import { TarifaService } from 'src/app/service/tarifa.service';

@Component({
  selector: 'app-crearconsumo',
  templateUrl: './crearconsumo.page.html',
  styleUrls: ['./crearconsumo.page.scss'],
})
export class CrearconsumoPage implements OnInit {

  consumo: Consumo;
  medidor: Medidor;

  //Variabes del backend
  fecha = '';
  lectura: Number;

  //Factura
  razonSocial = '';
  cedula = '';
  fechasTarifa: any[] = [];
  consumoMaximo: Number;
  costoUnitario: Number; 

  constructor(
    private consumoService: ConsumoService,
    private medidorService: MedidorService, 
    private socioService: SocioService,
    private tarifaService: TarifaService,
    private toastController: ToastController, 
    private activatedRoute: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    this.getInfoMedidor();
    this.getSocioByMedidor();
    this.getUltimaTarifa();
  }

  crearConsumo(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    //formateamos la fecha
    moment.locale('es');
    var fecha = moment(this.fecha).format('LL');

    //Creamos nuestra factura
    var lectu: Number;

    if(this.lectura <= this.consumoMaximo){
      lectu = this.lectura;
    }else{
      lectu = +this.lectura * +this.costoUnitario;
    }

    var factura = new Factura(this.razonSocial, this.cedula, this.fecha, lectu, false);

    //Creamos nuestro consumo
    this.consumo = new Consumo(fecha, this.lectura, this.medidor, factura);
    
    this.consumoService.crearConsumo(Number(id), this.consumo).subscribe(
      data => {
        this.presentToast('Consumo asignado');
        this.router.navigate(['/listarmedidores']);
      },
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  //Metodo para saber datos del medidor
  getInfoMedidor(){

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.medidorService.detallesMedidor(Number(id)).subscribe(
      data => {
        this.medidor = data;
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );

  }

  //Metodo para saber el socio de acuerdo a su medidor
  getSocioByMedidor(){

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.socioService.listaSocios().subscribe(
      data => {

        data.forEach(ele => {
          var medi = ele['medidores'];

          //recorremos todos los medidores existentes
          for(let p of medi){
            //el medidor con el id igual al id que pasamos tienen que ser iguales
            //para sacar los datos del socio
            if(p.id == id){
              this.razonSocial = ele.nombres + ' ' + ele.apellidos;
              this.cedula = ele.cedula;
            }  
          }
          
        });
    
      }
    );

  }

  //Metodo para saber la ultima tarifa de acuerdo a la fecha mas actual
  getUltimaTarifa(): void{
    this.tarifaService.listaTarifas().subscribe(
      data => {

        //Sacamos las fechas y lo convertimos a tipo Date
        data.forEach(ele => {
          this.fechasTarifa.push(new Date(ele.fechaInicio.toString()));
        });

        //Fecha maxima
        var fechaMaxima = new Date(Math.max.apply(null, this.fechasTarifa)).toISOString().slice(0, 10);
        
        //Una vez encontrado la fecha maximo verificamos en la bd
        //Ahora extraemos el costoUnitario y el consumoMaximo de la tarifa
        data.forEach(ele => {
            if(ele.fechaInicio == fechaMaxima){
              this.consumoMaximo = ele.consumoMaximo;
              this.costoUnitario = ele.costoUnitario;
            }
        });
        
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
