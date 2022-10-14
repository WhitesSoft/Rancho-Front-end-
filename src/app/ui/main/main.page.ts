import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {

  @ViewChild(MenuComponent) menu: MenuComponent;

  isLogged = false;
  usuario = '';

  constructor(
    private tokenService: TokenService, 
    private router: Router) { }

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

}
