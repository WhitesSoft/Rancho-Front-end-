import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  isLogged: boolean;
  isAdmin: boolean;
  isCajero: boolean;
  isLecturador: boolean;
  isPlomero: boolean;
  isUser: boolean;
  roles: string[] = [];

  constructor(
    private tokenService: TokenService,
    private router: Router) { }

  ngOnInit() {
    this.testLogged();
  }

  ionViewWillEnter() {
    this.testLogged();
  }

  cerrarSesion(): void {
    this.tokenService.cerrarSesion();
    this.isLogged = false;
    this.isAdmin = false;
    this.isCajero = false;
    this.isLecturador = false;
    this.isPlomero = false;
    this.isUser = false;
    this.router.navigate(['/login']);
  }

  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
    //this.isAdmin = this.tokenService.getAuthorities().length > 1;
    this.roles = this.tokenService.getAuthorities();

    var roo = this.roles;
    this.roles.forEach(ele => {

      var x: string = ele['authority'];

      if (x.substring(5) == 'ADMINISTRADOR')
        this.isAdmin = true;

      if (x.substring(5) == 'USER')
        this.isUser = true;

      if (x.substring(5) == 'CAJERO')
        this.isCajero = true;

      if (x.substring(5) == 'LECTURADOR')
        this.isLecturador = true;

      if (x.substring(5) == 'PLOMERO')
        this.isPlomero = true;

    });


  }

}
