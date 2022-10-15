import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.page.html',
  styleUrls: ['./listarusuarios.page.scss'],
})
export class ListarusuariosPage implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService, 
    private toastController: ToastController, 
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.cargarLista();
  }
  
  ionViewWillEnter() {
    this.cargarLista();
  }

  cargarLista(): void {
    this.usuarioService.listaUsuarios().subscribe(
      data => {
        this.usuarios = data;
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  eliminarUsuario(id: number): void {
    this.usuarioService.eliminarUsuario(Number(id)).subscribe(
      data => {
        this.presentToast(data.mensaje);
        this.cargarLista();
      }, 
      err => {
        this.presentToast(err.error.mensaje);
      }
    );
  }

  async borrarConfirm(id: Number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que lo deseas eliminar?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.eliminarUsuario(Number(id));
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

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
