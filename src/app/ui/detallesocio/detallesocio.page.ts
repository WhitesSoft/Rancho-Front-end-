import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Medidor } from 'src/app/models/medidor';
import { Socio } from 'src/app/models/socio';
import { MedidorService } from 'src/app/service/medidor.service';
import { SocioService } from 'src/app/service/socio.service';

@Component({
  selector: 'app-detallesocio',
  templateUrl: './detallesocio.page.html',
  styleUrls: ['./detallesocio.page.scss'],
})
export class DetallesocioPage implements OnInit {

  socio: Socio;
  medidor: Medidor;
  totalMedidores = 0;

  constructor(
    private socioService: SocioService,
    private medidorService: MedidorService,
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController, 
    private alertController: AlertController
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

    this.medidorService.listaMedidoresSocio(Number(id)).subscribe(
      data => {
        this.totalMedidores = data.length;
      }, 
      err => {
        this.presentToast('No se pudo cargar la información');
      }
    );

  }

  eliminarMedidores(id: number): void {
    this.medidorService.eliminarMedidoresSocio(Number(id)).subscribe(
      data => {
        this.presentToast(data.mensaje);
        this.cargarInformacion();
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  async borrarConfirm(id: Number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que los deseas eliminar?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.eliminarMedidores(Number(id));
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
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
