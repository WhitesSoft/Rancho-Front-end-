import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cambiarpassword',
  templateUrl: './cambiarpassword.page.html',
  styleUrls: ['./cambiarpassword.page.scss'],
})
export class CambiarpasswordPage implements OnInit {

  usuario: Usuario;
  password = '';
  estadoPassword = true;

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    //setTimeout(() => this.cargarInformacion(), 2000);

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.usuarioService.detallesUsuario(Number(id)).subscribe(
      data => {
        this.usuario = data;
      },
      err => {
        this.presentToast('No se pudo cargar la información');
      }
    );

  }

  actualizarUsuario(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
   

    
    
    console.log(this.usuario);
    

    console.log("Modificado");
    
    
    


    //Actualizamos el password
    this.usuario.password = this.password;
    this.usuario.estadoPassword = this.estadoPassword;
    console.log(this.usuario);

    var nuevo = this.usuario;
   
    this.usuarioService.eliminarUsuario(Number(id)).subscribe(
      data => {
        console.log("posi elimnar");

        
      }
    );

    

    //console.log(this.usuario.roles);

   


    // var nuevoUsuario: Usuario = new Usuario(this.usuario.usuario, this.usuario.password, this.usuario.estadoPassword, this.usuario.socio, this.usuario.roles);
    // //console.log(nuevoUsuario);

    // this.usuarioService.actualizarUsuarioPassword(Number(id), this.usuario).subscribe(
    //   data => {
    //     console.log(data);

    //     this.presentToast("Password actualizado correctamente.")
    //     this.router.navigate(['/main']);
    //   },
    //   err => {
    //     console.log(err);
    //     this.presentToast(err.error.message);
    //   }
    // );


    // const alert = await this.alertController.create({
    //   header: 'Confirmar',
    //   message: '¿Seguro que deseas cambiar la contraseña?',
    //   buttons: [
    //     {
    //       text: 'Aceptar',
    //       handler: () => {

    //         //Actualizamos el password
    //         this.usuario.password = this.newPassword;
    //         this.usuario.estadoPassword = true;

    //         console.log(this.usuario);


    //         var nuevoUsuario: Usuario = new Usuario(this.usuario.usuario, this.usuario.password, this.usuario.estadoPassword, this.usuario.socio, this.usuario.roles);
    //         //console.log(nuevoUsuario);

    //         this.usuarioService.actualizarUsuarioPassword(Number(id), this.usuario).subscribe(
    //           data => {
    //             console.log(data);

    //             this.presentToast("Password actualizado correctamente.")
    //             this.router.navigate(['/main']);
    //           }, 
    //           err => {
    //             console.log(err);
    //             this.presentToast(err.error.message);
    //           }
    //         );

    //       }
    //     },
    //     {
    //       text: 'Cancelar',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: (blah) => {
    //         console.log('Confirm Cancel: blah');
    //       }
    //     }
    //   ]
    // });

    // await alert.present();

  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.usuarioService.detallesUsuario(Number(id)).subscribe(
      data => {
        this.usuario = data;
        //console.log(this.usuario);
      },
      err => {
        this.presentToast('No se pudo cargar la información');
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
