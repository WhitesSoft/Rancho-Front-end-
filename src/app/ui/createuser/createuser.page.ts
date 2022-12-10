import { Component, OnInit } from '@angular/core';
import { Socio } from 'src/app/models/socio';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.page.html',
  styleUrls: ['./createuser.page.scss'],
})
export class CreateuserPage implements OnInit {

  formSprache!: FormGroup;
  codeCollection! : AngularFirestoreCollection;

  nuevoUsuario: NuevoUsuario;
  loginUsuario: LoginUsuario;

  nombres: string = '';
  apellidos: string = '';
  cedula: string = '';
  correo: string = '';
  direccion: string = '';
  foto: string = '';
  activo: boolean = true;
  fechaNacimiento: string = '';
  usuario : string = '';
  password: string = '';

  isLogged = false;

  urlImage!: Observable<string>; // imagen rescatada de Firebase
  url = "/assets/icon/profile.png";

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private authService: AuthService, 
    private tokenService: TokenService,
    private toastController: ToastController, 
    private router: Router, 
    private storage: AngularFireStorage,
    private formbuilder: FormBuilder, 
    private db: AngularFirestore) { }

  ngOnInit() {
    this.formSprache = this.formbuilder.group({
      imageUrl: [''],
    });
  }

  crearUsuario(img: any): void {
    
    this.foto = img.value;

    //Crear socio
    const socio = new Socio(this.nombres, this.apellidos, this.cedula, 
      this.correo, this.fechaNacimiento, this.direccion, this.foto , this.activo);

    //crear usuario  
    this.nuevoUsuario = new NuevoUsuario(this.usuario, this.password, false, socio);

    this.authService.crear(this.nuevoUsuario).subscribe(
      data => {

        //Subir db a firebase
        this.formSprache.value.imageUrl = img.value;
        this.codeCollection = this.db.collection('Usuarios');
        this.codeCollection.doc(this.usuario).set(this.formSprache.value);

        this.presentToast(data.mensaje);
        this.router.navigate(['/login']);
      },
      err => {
        this.presentToast(err.error.mensaje);
      }
    );

   
  }

  imagePreview(e: any) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
      this.url = event.target.result;
      const file = e.target.files[0];
      const filepath = this.usuario + '1' ; //+ this.formSprache.value.language; //nombre a la imagen
      const ref = this.storage.ref(filepath);
      const task = this.storage.upload(filepath, file);
      task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
    }
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
