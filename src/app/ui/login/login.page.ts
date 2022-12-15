import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formSprache!: FormGroup;
  private codeCollection! : AngularFirestoreCollection;

  loginUsuario: LoginUsuario;
  usuario = '';
  password = '';

  hide = true
  isLogged = false;

  urlImage!: Observable<string>; // imagen rescatada
  url = "data:image/jpeg;base64,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";

  constructor(
    private router: Router,
    private authService: AuthService, 
    private tokenService: TokenService, 
    private toastController: ToastController, 
    private storage: AngularFireStorage, 
    private formbuilder: FormBuilder, 
    private db: AngularFirestore) { }

  ngOnInit() {
    this.testLogged();

    this.formSprache = this.formbuilder.group({
      imageUrl: [''],
    });
  }

  ionViewWillEnter() {
    this.testLogged();
    this.usuario = '';
    this.password = '';
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
