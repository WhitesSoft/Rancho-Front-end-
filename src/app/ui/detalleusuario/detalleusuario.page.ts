import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-detalleusuario',
  templateUrl: './detalleusuario.page.html',
  styleUrls: ['./detalleusuario.page.scss'],
})
export class DetalleusuarioPage implements OnInit {

  usuario: Usuario;
  roles: string[] = [];

  constructor(
    private usuarioService: UsuarioService, 
    private activatedRoute: ActivatedRoute, 
    private toastController: ToastController, 
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    setTimeout( () => this.cargarInformacion(), 2000);
  }

  cargarInformacion(): void {

    //accedemos al id que aparece en el url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.usuarioService.detallesUsuario(Number(id)).subscribe(
      data => {
        this.usuario = data;

        var rol = data;
        rol.roles.forEach(item => {
          var x: string = item['rolNombre'];
          this.roles.push(x.substring(5));
        });
        
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
