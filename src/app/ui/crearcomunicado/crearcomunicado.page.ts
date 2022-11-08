import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Comunicado } from 'src/app/models/comunicado';
import { Usuario } from 'src/app/models/usuario';
import { ComunicadoService } from 'src/app/service/comunicado.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-crearcomunicado',
  templateUrl: './crearcomunicado.page.html',
  styleUrls: ['./crearcomunicado.page.scss'],
})
export class CrearcomunicadoPage implements OnInit {

  //Variables del backend
  descripcion = '';
  fechaInicio = '';
  vigencia = '';

  comunicado: Comunicado;
  usuario: Usuario;
  usuarioNombre = '';
  id: Number;

  constructor(
    private comunicadoService: ComunicadoService,
    private usuarioService: UsuarioService, 
    private tokenService: TokenService,
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {
    this.getIdUsuario();
  }


  crearComunicado(): void {
    //Creamos nuestro comunicado
    this.comunicado = new Comunicado(this.descripcion, this.fechaInicio, +this.vigencia, this.usuario);

    this.comunicadoService.crearComunicado(Number(this.id), this.comunicado).subscribe(
      data => {
        this.presentToast('Comunicado creado');
        this.router.navigate(['/main']);
      },
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  //Metodo para obtener el id del usuario
  getIdUsuario(): void {
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

        this.obtenerDetallesUsuario(Number(this.id));

      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  obtenerDetallesUsuario(id: Number): void {
    this.usuarioService.detallesUsuario(Number(id)).subscribe(
      data => {
        this.usuario = data;
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
