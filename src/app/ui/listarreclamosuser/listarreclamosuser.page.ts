import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Reclamo } from 'src/app/models/reclamo';
import ReclamoService from 'src/app/service/reclamo.service';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listarreclamosuser',
  templateUrl: './listarreclamosuser.page.html',
  styleUrls: ['./listarreclamosuser.page.scss'],
})
export class ListarreclamosuserPage implements OnInit {

  reclamos: Reclamo[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private reclamoService: ReclamoService,
    private toastController: ToastController 
  ) { }

  ngOnInit() {
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

            //Listamos los reclamos del socio
            this.reclamoService.listaReclamosSocio(+id).subscribe(
              data => {
                this.reclamos = data;
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
