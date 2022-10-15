import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Medidor } from 'src/app/models/medidor';
import { MedidorService } from 'src/app/service/medidor.service';
import { SocioService } from 'src/app/service/socio.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import jwtDecode, * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-listarmedidoresuser',
  templateUrl: './listarmedidoresuser.page.html',
  styleUrls: ['./listarmedidoresuser.page.scss'],
})
export class ListarmedidoresuserPage implements OnInit {

  medidores: Medidor[] = [];

  constructor(
    private socioService: SocioService,
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private medidorService: MedidorService,
    private toastController: ToastController 
  ) { }

  ngOnInit() {
    this.cargarLista();
  }

  ionViewWillEnter() {
    this.cargarLista();
  }

  cargarLista(): void {

    //obtenemos el usuario dado por el token
    var user = this.tokenService.getUsuario();

    //listamos todos los usuarios
    this.usuarioService.listaUsuarios().subscribe(
      data => {

        data.forEach(item => {

          //comparamos el usuario del token con todos los usuarios y sacamos su id
          if(user == item['usuario']){
            var id = item['id'];

            //Listamos los medidores del socio
            this.medidorService.listaMedidoresSocio(+id).subscribe(
              data => {
                this.medidores = data;
              }
            );
          }

        });
        
      }
    );
    

    // this.medidorService.listaMedidoresSocio(2).subscribe(
    //   data => {
    //     this.medidores = data;
    //   }, 
    //   err => {
    //     this.presentToast(err.error.message);
    //   }
    // );
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
