import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { Socio } from 'src/app/models/socio';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild(MenuComponent) menu: MenuComponent;

  isLogged = false;
  estadoPassword: boolean;
  usuario = '';
  socio: Socio;
  id: Number;

  constructor(
    private tokenService: TokenService,
    private usuarioService: UsuarioService,
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.verificarPassword();
  }
  
  ionViewWillEnter() {
    this.testLogged();
    this.menu.testLogged();
    this.verificarPassword();
  }

  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
  }

  verificarPassword(): void {

    var usuario = this.tokenService.getUsuario();

    this.usuarioService.listaUsuarios().subscribe(
      data =>{
        
        data.forEach(ele =>{

          if(ele.usuario == usuario){
            this.estadoPassword = ele.estadoPassword;
            this.id = ele.id;
            this.usuario = ele.socio.nombres;
          }

        });
        
      }
    );
  }

  iniciarSesion(): void {
    this.router.navigate(['/login']);
  }

  comunicados(): void {
    this.router.navigate(['/comunicadosglobal']);
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
