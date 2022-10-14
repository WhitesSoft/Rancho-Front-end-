import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: LoginUsuario;
  usuario = '';
  password = '';

  hide = true
  isLogged = false;

  constructor(
    private router: Router,
    private authService: AuthService, 
    private tokenService: TokenService, 
    private toastController: ToastController) { }

  ngOnInit() {
    this.testLogged();
  }

  ionViewWillEnter() {
    this.testLogged();
  }

  iniciarSesion(): void {
    //Obtenemos los datos ingresados por el usuari
    this.loginUsuario = new LoginUsuario(this.usuario, this.password);
    
    //Ahora usamos el servicio de AuthService
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUsuario(data.usuario);
        this.tokenService.setAuthorities(data.authorities);
        this.isLogged = true;
        this.router.navigate(['/main']);
      },
      err => {
        this.presentToast('No autorizado');
      }
    );
  }

  cerrarSesion(): void {
    this.tokenService.cerrarSesion();
    this.isLogged = false;
    this.usuario = '';
    this.password = '';
  }

  goToCreateUser(): void{
    this.router.navigate(['/createuser']);
  }

  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
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
