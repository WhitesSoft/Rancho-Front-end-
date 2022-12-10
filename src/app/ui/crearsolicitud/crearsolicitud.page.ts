import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Socio } from 'src/app/models/socio';
import { Solicitud } from 'src/app/models/solicitud';
import { SocioService } from 'src/app/service/socio.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-crearsolicitud',
  templateUrl: './crearsolicitud.page.html',
  styleUrls: ['./crearsolicitud.page.scss'],
})
export class CrearsolicitudPage implements OnInit {

  //Variables del backend
  detalle = '';
  fecha = '';
  atendido = false;

  solicitud: Solicitud;
  socio: Socio;

  usuarioNombre = '';
  id: Number;

  constructor(
    private solicitudService: SolicitudService,
    private socioService: SocioService, 
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {
    this.getIdSocio();
  }


  crearSolicitud(): void {
    //Creamos nuestro solicitud
    this.fecha = new Date().toISOString().split('T')[0];
    this.solicitud = new Solicitud(this.detalle, this.fecha, this.atendido, this.socio);

    this.solicitudService.crearSolicitud(Number(this.id), this.solicitud).subscribe(
      data => {
        this.presentToast('Solicitud enviada');
        this.router.navigate(['/main']);
      },
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  //Metodo para obtener el id del usuario
  getIdSocio(): void {
    //Obtenemos el usuario logeado
    this.usuarioNombre = this.tokenService.getUsuario();
    //console.log(this.usuario);

    //Obtenemos todos los usuarios de la bd
    this.usuarioService.listaUsuarios().subscribe(
      data => {
        data.forEach(ele =>{

          var usuario: string = ele['usuario'];
          var idUsuario: Number = ele['id'];
          
          //Si el usuario logueado es igual a uno de los usuarios de la bd obtenemos el id de este
          if(usuario == this.usuarioNombre){
            this.id = idUsuario;
          }
        
        });

        this.obtenerDetallesSocio(Number(this.id));
        

      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  obtenerDetallesSocio(id: Number): void {
    this.socioService.detallesSocio(Number(id)).subscribe(
      data => {
        this.socio = data;
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
