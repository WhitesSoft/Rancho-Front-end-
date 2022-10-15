import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Medidor } from 'src/app/models/medidor';
import { MedidorService } from 'src/app/service/medidor.service';

@Component({
  selector: 'app-detallemedidor',
  templateUrl: './detallemedidor.page.html',
  styleUrls: ['./detallemedidor.page.scss'],
})
export class DetallemedidorPage implements OnInit {

  medidor: Medidor;

  constructor(
    private medidorService: MedidorService,
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController
  ) { }

  ngOnInit() {
    setTimeout( () => this.cargarInformacion(), 2000);
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

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
