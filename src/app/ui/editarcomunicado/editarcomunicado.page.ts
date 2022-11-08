import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Comunicado } from 'src/app/models/comunicado';
import { ComunicadoService } from 'src/app/service/comunicado.service';

@Component({
  selector: 'app-editarcomunicado',
  templateUrl: './editarcomunicado.page.html',
  styleUrls: ['./editarcomunicado.page.scss'],
})
export class EditarcomunicadoPage implements OnInit {

  comunicado: Comunicado;

  constructor(
    private comunicadoService: ComunicadoService, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {

    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.comunicadoService.detallesComunicado(Number(id)).subscribe(
      data => {
        this.comunicado = data;
      }, 
      err => {
       
      }
    );

  }

  actualizarComunicado(): void {
    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.comunicadoService.actualizarComunicado(Number(id), this.comunicado).subscribe(
      data => {
        this.presentToast('Comuninado actualizado');
        this.router.navigate(['/listarcomunicados']);
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
