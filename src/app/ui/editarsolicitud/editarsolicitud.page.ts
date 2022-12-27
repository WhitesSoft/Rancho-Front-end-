import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-editarsolicitud',
  templateUrl: './editarsolicitud.page.html',
  styleUrls: ['./editarsolicitud.page.scss'],
})
export class EditarsolicitudPage implements OnInit {

  solicitud: Solicitud;

  constructor(
    private solicitudService: SolicitudService, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {

    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.solicitudService.detallesSolicitud(Number(id)).subscribe(
      data => {
        this.solicitud = data;
      }, 
      err => {
       
      }
    );

  }

  actualizarSolicitud(): void {
    //obtenemos el id
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.solicitud.fecha = new Date().toISOString().split('T')[0];
    this.solicitudService.actualizarSolicitud(Number(id), this.solicitud).subscribe(
      data => {
        this.presentToast('Solicitud actualizada');
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
