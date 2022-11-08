import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Comunicado } from 'src/app/models/comunicado';
import { ComunicadoService } from 'src/app/service/comunicado.service';

@Component({
  selector: 'app-detallecomunicado',
  templateUrl: './detallecomunicado.page.html',
  styleUrls: ['./detallecomunicado.page.scss'],
})
export class DetallecomunicadoPage implements OnInit {

  comunicado: Comunicado;

  constructor(
    private comunicadoService: ComunicadoService,
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController
  ) { }

  ngOnInit() {
    setTimeout( () => this.cargarInformacion(), 2000);
  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.comunicadoService.detallesComunicado(Number(id)).subscribe(
      data => {
        this.comunicado = data;
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
