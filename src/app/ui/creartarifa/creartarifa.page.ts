import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Tarifa } from 'src/app/models/tarifa';
import { TarifaService } from 'src/app/service/tarifa.service';

@Component({
  selector: 'app-creartarifa',
  templateUrl: './creartarifa.page.html',
  styleUrls: ['./creartarifa.page.scss'],
})
export class CreartarifaPage implements OnInit {

  //Variables del backend
  fechaInicio = '';
  consumoMaximo: Number;
  costoUnitario: Number;

  tarifa: Tarifa;

  constructor(
    private tarifaService: TarifaService,
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearTarifa(): void {
    //Creamos nuestra tarifa
    this.tarifa = new Tarifa(this.fechaInicio, this.consumoMaximo, this.costoUnitario);

    this.tarifaService.crearTarifa(this.tarifa).subscribe(
      data => {
        this.presentToast('Tarifa creada');
        this.router.navigate(['/main']);
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
