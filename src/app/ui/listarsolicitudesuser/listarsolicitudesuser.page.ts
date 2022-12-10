import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Solicitud } from 'src/app/models/solicitud';
import { SocioService } from 'src/app/service/socio.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listarsolicitudesuser',
  templateUrl: './listarsolicitudesuser.page.html',
  styleUrls: ['./listarsolicitudesuser.page.scss'],
})
export class ListarsolicitudesuserPage implements OnInit {

  solicitudes: Solicitud[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private solicitudService: SolicitudService,
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

            //Listamos las solicitudes del socio
            this.solicitudService.listaSolicitudesSocio(+id).subscribe(
              data => {
                this.solicitudes = data;
              }
            );
          }

        });
        
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
