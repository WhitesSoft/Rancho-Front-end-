import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Comunicado } from 'src/app/models/comunicado';
import { ComunicadoService } from 'src/app/service/comunicado.service';

@Component({
  selector: 'app-comunicadosglobal',
  templateUrl: './comunicadosglobal.page.html',
  styleUrls: ['./comunicadosglobal.page.scss'],
})
export class ComunicadosglobalPage implements OnInit {

  comunicados: Comunicado[] = [];

  constructor(
    private comunicadoService: ComunicadoService, 
    private toastController: ToastController, 
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  ionViewWillEnter() {
    this.cargarLista();
  }

  cargarLista(): void {
    this.comunicadoService.listaComunicados().subscribe(
      data => {
        this.comunicados = data;
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
