import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Medidor } from 'src/app/models/medidor';
import { Socio } from 'src/app/models/socio';
import { MedidorService } from 'src/app/service/medidor.service';
import { SocioService } from 'src/app/service/socio.service';

@Component({
  selector: 'app-crearmedidor',
  templateUrl: './crearmedidor.page.html',
  styleUrls: ['./crearmedidor.page.scss'],
})
export class CrearmedidorPage implements OnInit {

  medidor: Medidor;
  socio: Socio;

  serial = '';
  marca = '';
  registroInicio = '0';
  fechaInstalacion = '';
  

  constructor(
    private socioService: SocioService, 
    private activatedRoute: ActivatedRoute, 
    private medidorService: MedidorService, 
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {
    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.socioService.detallesSocio(Number(id)).subscribe(
      data => {
        this.socio = data;
      },
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  asignarMedidor(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  
    this.medidor = new Medidor(this.serial, this.marca, +this.registroInicio, this.fechaInstalacion, this.socio);

    this.medidorService.crearMedidor(Number(id), this.medidor).subscribe(
      data => {
        this.presentToast('Medidor asignado');
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
