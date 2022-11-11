import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Consumo } from 'src/app/models/consumo';
import { Medidor } from 'src/app/models/medidor';
import { ConsumoService } from 'src/app/service/consumo.service';
import { MedidorService } from 'src/app/service/medidor.service';

@Component({
  selector: 'app-detallemedidor',
  templateUrl: './detallemedidor.page.html',
  styleUrls: ['./detallemedidor.page.scss'],
})
export class DetallemedidorPage implements OnInit {

  medidor: Medidor;
  consumos: Consumo[] = [];

  constructor(
    private medidorService: MedidorService,
    private consumoService: ConsumoService,
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController
  ) { }

  ngOnInit() {
    setTimeout( () => this.cargarInformacion(), 2000);
    setTimeout( () => this.cargarConsumos(), 2000);
  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.medidorService.detallesMedidor(Number(id)).subscribe(
      data => {
        this.medidor = data;
      }, 
      err => {
        this.presentToast('No se pudo cargar la información');
      }
    );

  }

  cargarConsumos(): void{

     //accedemos al id que aparece en el url
     const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.consumoService.listaConsumosMedidor(Number(id)).subscribe(
      data => {
        this.consumos = data;
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
