import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Reclamo } from 'src/app/models/reclamo';
import { Socio } from 'src/app/models/socio';
import ReclamoService from 'src/app/service/reclamo.service';
import { SocioService } from 'src/app/service/socio.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-crearreclamo',
  templateUrl: './crearreclamo.page.html',
  styleUrls: ['./crearreclamo.page.scss'],
})
export class CrearreclamoPage implements OnInit {

  //Variables del backend
  detalle = '';
  fecha = '';
  atendido = false;

  reclamo: Reclamo;
  socio: Socio;
  id: Number;
  usuarioNombre = '';

  constructor(
    private reclamoService: ReclamoService,
    private socioService: SocioService, 
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {
    this.getIdSocio();
  }

  crearReclamo(): void {
    //Creamos nuestro reclamo
    this.fecha = new Date().toISOString().split('T')[0];
    this.reclamo = new Reclamo(this.detalle, this.fecha, null, this.atendido, this.socio);

    this.reclamoService.crearReclamo(Number(this.id), this.reclamo).subscribe(
      data => {
        this.presentToast('Reclamo enviado');
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
