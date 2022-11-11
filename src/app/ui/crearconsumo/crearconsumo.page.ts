import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Consumo } from 'src/app/models/consumo';
import { Medidor } from 'src/app/models/medidor';
import { ConsumoService } from 'src/app/service/consumo.service';
import { MedidorService } from 'src/app/service/medidor.service';

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

  constructor(
    private consumoService: ConsumoService,
    private medidorService: MedidorService, 
    private toastController: ToastController, 
    private activatedRoute: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    this.getInfoMedidor();

   
  }

  crearConsumo(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    //formateamos la fecha
    moment.locale('es');
    var fecha = moment(this.fecha).format('LL');
    

    //Creamos nuestro consumo
    this.consumo = new Consumo(fecha, this.lectura, this.medidor);

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

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
