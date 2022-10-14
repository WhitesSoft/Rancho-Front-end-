import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class ControladorGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //Accedemos al rol real que tenemos
    const requiredRoles = next.data.requiredRoles;

    const realRol = this.tokenService.getAuthorities().length > 1 ? 'administrador' : 'user';

    if (!this.tokenService.getToken() || requiredRoles.indexOf(realRol) === -1) {
      this.router.navigate(['/main']);
      return false;
    }

    return true;
  }
  
}
