import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/service/socio.service';

@Component({
  selector: 'app-detallesocio',
  templateUrl: './detallesocio.page.html',
  styleUrls: ['./detallesocio.page.scss'],
})
export class DetallesocioPage implements OnInit {

  socio: Socio;

  constructor(
    private socioService: SocioService,
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController
  ) { }

  ngOnInit() {
    setTimeout( () => this.cargarInformacion(), 2000);
  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.socioService.detallesSocio(Number(id)).subscribe(
      data => {
        this.socio = data;
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
