import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/service/socio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-listarsocios',
  templateUrl: './listarsocios.page.html',
  styleUrls: ['./listarsocios.page.scss'],
})
export class ListarsociosPage implements OnInit {

  socios: Socio[] = [];

  constructor(
    private socioService: SocioService, 
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(): void {
    this.socioService.listaSocios().subscribe(
      data => {
        this.socios = data;
      }, 
      err => {
        this.presentToast(err.error.message);
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
