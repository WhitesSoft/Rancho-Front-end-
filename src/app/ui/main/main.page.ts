import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { Socio } from 'src/app/models/socio';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  @ViewChild(MenuComponent) menu: MenuComponent;

  isLogged = false;
  usuario = '';
  socio: Socio;

  constructor(
    private tokenService: TokenService,
    private toastController: ToastController, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.testLogged();
    this.menu.testLogged();
  }

  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
    this.usuario = this.tokenService.getUsuario();
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
