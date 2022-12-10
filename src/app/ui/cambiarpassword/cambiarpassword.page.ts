import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Socio } from 'src/app/models/socio';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { SocioService } from 'src/app/service/socio.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cambiarpassword',
  templateUrl: './cambiarpassword.page.html',
  styleUrls: ['./cambiarpassword.page.scss'],
})
export class CambiarpasswordPage implements OnInit {

  usuario: Usuario;
  socio: Socio;
  roles: any[] = [];
  password = '';
  estadoPassword = true;

  constructor(
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => this.cargarInformacion(), 2000);
  }

  async actualizarUsuario() {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas cambiar la contraseña?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {

            //Actualizamos 
            var usuarioActualizado: Usuario = new Usuario(this.usuario.usuario, this.password, true, this.usuario.socio, this.roles);
            this.usuarioService.actualizarUsuarioPassword(Number(id), usuarioActualizado).subscribe(
              data => {
                this.presentToast("Contraseña actualizada");
                this.router.navigate(['/main']);
              }
            );

          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();

  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    //Obtenemos usuario
    this.usuarioService.detallesUsuario(Number(id)).subscribe(
      data => {
        this.usuario = data;
      },
      err => {
        this.presentToast('No se pudo cargar la información');
      }
    );

    //Obtenemos roles
    var roleees = this.tokenService.getAuthorities();
    roleees.forEach(rol => {
      var x: string = rol['authority'];
      this.roles.push(x.substring(5).toLowerCase());
    });

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
