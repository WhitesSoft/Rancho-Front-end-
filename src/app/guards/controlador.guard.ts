import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root',
})

export class ControladorGuard implements CanActivate {

  admin = '';
  user = '';
  cajero = '';
  lecturador = '';
  plomero = '';
  rolesBD: string[] = [];

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //obtenemos informacion de los roles que se necesita para ingresar
    const requiredRoles = next.data.requiredRoles;

    this.rolesBD = this.tokenService.getAuthorities();
    this.rolesBD.forEach((ele) => {
      var x: string = ele['authority'];

      if (x.substring(5) == 'ADMINISTRADOR')
        this.admin = 'ADMINISTRADOR';

      if (x.substring(5) == 'USER')
        this.user = 'USER';

      if (x.substring(5) == 'CAJERO')
        this.cajero = 'CAJERO';

      if (x.substring(5) == 'LECTURADOR')
        this.lecturador = 'LECTURADOR';

      if (x.substring(5) == 'PLOMERO')
        this.plomero = 'PLOMERO';

    });


    //const realRol = this.tokenService.getAuthorities().length > 1 ? 'ADMINISTRADOR' : 'user';


    if ((!this.tokenService.getToken() || requiredRoles.indexOf(this.admin) === -1) &&
        (!this.tokenService.getToken() || requiredRoles.indexOf(this.user) === -1) &&
        (!this.tokenService.getToken() || requiredRoles.indexOf(this.cajero) === -1) &&
        (!this.tokenService.getToken() || requiredRoles.indexOf(this.lecturador) === -1) &&
        (!this.tokenService.getToken() || requiredRoles.indexOf(this.plomero) === -1)) {
          
      this.router.navigate(['/main']);
      return false;
    }


    // if (!this.tokenService.getToken() || requiredRoles.indexOf(this.rolesUsuario) === -1) {
    //   this.router.navigate(['/main']);
    //   this.rolesUsuario = [];
    //   return false;
    // }

    return true;
  }
}
