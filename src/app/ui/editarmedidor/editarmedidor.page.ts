import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Medidor } from 'src/app/models/medidor';
import { MedidorService } from 'src/app/service/medidor.service';

@Component({
  selector: 'app-editarmedidor',
  templateUrl: './editarmedidor.page.html',
  styleUrls: ['./editarmedidor.page.scss'],
})
export class EditarmedidorPage implements OnInit {

  medidor: Medidor;

  constructor(
    private medidorService: MedidorService, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {

    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.medidorService.detallesMedidor(Number(id)).subscribe(
      data => {
        this.medidor = data;
      }, 
      err => {
       
      }
    );

  }

  actualizarMedidor(): void {
    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.medidorService.actualizarMedidor(Number(id), this.medidor).subscribe(
      data => {
        this.presentToast('Medidor actualizado');
        this.router.navigate(['/listarmedidores']);
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
