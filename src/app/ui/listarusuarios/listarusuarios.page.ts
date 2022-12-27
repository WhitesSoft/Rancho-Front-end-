import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { ReportesService } from 'src/app/service/reportes.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.page.html',
  styleUrls: ['./listarusuarios.page.scss'],
})
export class ListarusuariosPage implements OnInit {

  usuarios: Usuario[] = [];
  estado: boolean;

  constructor(
    private usuarioService: UsuarioService, 
    private toastController: ToastController, 
    private alertController: AlertController,
    private reportesService: ReportesService
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
        if(this.usuarios.length != 0){
          this.estado = true;
        }
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

  imprimir(): void {
    const encabezado = ["Usuario", "Socio"];

    var cuerpo: any[] = [];
    for(let x of this.usuarios){
      cuerpo.push([x.usuario, x.socio.nombres + " " + x.socio.apellidos]);
    }

    this.reportesService.imprimir(encabezado, cuerpo, "Listado de usuarios", true);
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
