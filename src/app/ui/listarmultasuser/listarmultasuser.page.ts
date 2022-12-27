import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Multa } from 'src/app/models/multa';
import { MultasService } from 'src/app/service/multas.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listarmultasuser',
  templateUrl: './listarmultasuser.page.html',
  styleUrls: ['./listarmultasuser.page.scss'],
})
export class ListarmultasuserPage implements OnInit {

  estado: boolean = false;
  multas: Multa[] = [];
  multa: Multa;

  constructor(
    private usuarioService: UsuarioService,
    private tokenService: TokenService,
    private multasService: MultasService,
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router
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

            //Listamos las multas del socio
            this.multasService.listaMultasSocio(+id).subscribe(
              data => {
                
                data.forEach(ele => {
                  
                  //Si los estados son iguales a false, obtenemos solo esa multa.
                  if(ele.estado == false){
                    this.estado = true;
                    this.multas.push(ele);
                  }
                  
                });
               
              }
            );
            
          }

        });
        
      }
    );
  }

  async pagarMulta(id: Number) {

    //Obtenemos la multa
    this.multasService.detallesMulta(Number(id)).subscribe(
      data =>{
        this.multa = data;
      }
    );

    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que deseas pagar la multa?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {

            //modificamos la multa
            this.multa.estado = true;
            this.multasService.actualizarMulta(Number(id), this.multa).subscribe(
              data => {
                this.presentToast("Multa pagada");
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

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
