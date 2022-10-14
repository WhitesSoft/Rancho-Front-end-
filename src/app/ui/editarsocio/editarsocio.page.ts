import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Socio } from 'src/app/models/socio';
import { SocioService } from 'src/app/service/socio.service';

@Component({
  selector: 'app-editarsocio',
  templateUrl: './editarsocio.page.html',
  styleUrls: ['./editarsocio.page.scss'],
})
export class EditarsocioPage implements OnInit {

  socio: Socio;

  constructor(
    private socioService: SocioService, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {

    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.socioService.detallesSocio(Number(id)).subscribe(
      data => {
        this.socio = data;
      }, 
      err => {
       
      }
    );

  }

  actualizarSocio(): void {
    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.socioService.actualizarSocio(Number(id), this.socio).subscribe(
      data => {
        this.presentToast('Socio actualizado');
        this.router.navigate(['/listarsocios']);
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
