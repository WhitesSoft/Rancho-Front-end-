import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Reclamo } from 'src/app/models/reclamo';
import ReclamoService from 'src/app/service/reclamo.service';

@Component({
  selector: 'app-editarreclamo',
  templateUrl: './editarreclamo.page.html',
  styleUrls: ['./editarreclamo.page.scss'],
})
export class EditarreclamoPage implements OnInit {

  reclamo: Reclamo;

  constructor(
    private reclamoService: ReclamoService, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {

    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.reclamoService.detallesReclamo(Number(id)).subscribe(
      data => {
        this.reclamo = data;
      }
    );

  }

  actualizarReclamo(): void {
    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.reclamo.fecha = new Date().toISOString().split('T')[0];
    this.reclamoService.actualizarReclamo(Number(id), this.reclamo).subscribe(
      data => {
        this.presentToast('Reclamo actualizado');
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
