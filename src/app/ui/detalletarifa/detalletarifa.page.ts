import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Tarifa } from 'src/app/models/tarifa';
import { TarifaService } from 'src/app/service/tarifa.service';

@Component({
  selector: 'app-detalletarifa',
  templateUrl: './detalletarifa.page.html',
  styleUrls: ['./detalletarifa.page.scss'],
})
export class DetalletarifaPage implements OnInit {

  tarifa: Tarifa;

  constructor(
    private tarifaService: TarifaService,
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController
  ) { }

  ngOnInit() {
    setTimeout( () => this.cargarInformacion(), 2000);
  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.tarifaService.detallesTarifa(Number(id)).subscribe(
      data => {
        this.tarifa = data;
      }, 
      err => {
        this.presentToast('No se pudo cargar la información');
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
