import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Socio } from 'src/app/models/socio';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.page.html',
  styleUrls: ['./createuser.page.scss'],
})
export class CreateuserPage implements OnInit {

  nuevoUsuario: NuevoUsuario;
  loginUsuario: LoginUsuario;

  nombres: string = '';
  apellidos: string = '';
  correo: string = '';
  direccion: string = '';
  activo: boolean = true;
  fechaNacimiento: string = '';
  usuario : string = '';
  password: string = '';

  isLogged = false;

  //hide = true
  //email = new FormControl('', [Validators.required, Validators.email]);

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(
    private authService: AuthService, 
    private tokenService: TokenService,
    private toastController: ToastController, 
    private router: Router ) { }

  ngOnInit() {
  }

  crearUsuario(): void {
    //Crear socio
    const socio = new Socio(this.nombres, this.apellidos, this.correo, this.fechaNacimiento, this.direccion, this.activo);

    //crear usuario  
    this.nuevoUsuario = new NuevoUsuario(this.usuario, this.password, socio);

    this.authService.crear(this.nuevoUsuario).subscribe(
      data => {
        this.presentToast(data.mensaje);
        this.router.navigate(['/login']);
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

  logOut(): void {
    this.tokenService.cerrarSesion();
    this.isLogged = false;
  }

  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
  }


}
