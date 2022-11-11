import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Tarifa } from 'src/app/models/tarifa';
import { TarifaService } from 'src/app/service/tarifa.service';

@Component({
  selector: 'app-editartarifa',
  templateUrl: './editartarifa.page.html',
  styleUrls: ['./editartarifa.page.scss'],
})
export class EditartarifaPage implements OnInit {

  tarifa: Tarifa;

  constructor(
    private tarifaService: TarifaService, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {

    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tarifaService.detallesTarifa(Number(id)).subscribe(
      data => {
        this.tarifa = data;
      }, 
      err => {
       
      }
    );

  }

  actualizarTarifa(): void {
    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.tarifaService.actualizarTarifa(Number(id), this.tarifa).subscribe(
      data => {
        this.presentToast('Tarifa actualizada');
        this.router.navigate(['/listartarifas']);
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
