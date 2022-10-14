import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(): void {
    this.usuarioService.listaUsuarios().subscribe(
      data => {
        this.usuarios = data;
      }, 
      err => {
        this.presentToast(err.error.message);
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
