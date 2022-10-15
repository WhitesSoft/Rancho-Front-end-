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
    this.router.navigate(['/login']);
  }

  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
    this.isAdmin = this.tokenService.getAuthorities().length > 1;
    this.roles = this.tokenService.getAuthorities();

    var roo = this.roles;
    roo.forEach(ele => {
      var x: string = ele['authority'];
      //console.log(x);
    });

  }

}
