import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Solicitud } from 'src/app/models/solicitud';
import { SocioService } from 'src/app/service/socio.service';
import { SolicitudService } from 'src/app/service/solicitud.service';

@Component({
  selector: 'app-detallesolicitud',
  templateUrl: './detallesolicitud.page.html',
  styleUrls: ['./detallesolicitud.page.scss'],
})
export class DetallesolicitudPage implements OnInit {

  solicitud: Solicitud;

  estado = '';
  nombreSocio = '';
  

  constructor(
    private solicitudService: SolicitudService,
    private socioService: SocioService,
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController
  ) { }

  ngOnInit() {
    setTimeout( () => this.cargarInformacion(), 2000);
  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.solicitudService.detallesSolicitud(Number(id)).subscribe(
      data => {
        this.solicitud = data;
        
        //Verificamos si fue atendido la solicitud
        if(data.atendido == true){
          this.estado = 'Atentido';
        } else {
          this.estado = 'No atendido';
        }
        
        
      }, 
      err => {
        this.presentToast('No se pudo cargar la información');
      }
    );


    //Listamos todos los socios
    this.socioService.listaSocios().subscribe(
      data => {

        data.forEach(ele => {

          //Aqui solo obtenemos las solicitudes que tiene cada socio
          var x = ele["solicitudes"][0];
          if(x != null){
            //Aqui verificamos que el id(global) que tiene la pagina sea igual con 
            //con algun id de las solicitudes encontradas
            //Si es asi obtenemos el nombre del socio
            if(x.id == id)
             this.nombreSocio = ele.nombres;
          }
            
  
        });
        
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
