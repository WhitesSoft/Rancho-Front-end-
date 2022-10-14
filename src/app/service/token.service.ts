import { Injectable } from '@angular/core';
import jwtDecode, * as jwt_decode from 'jwt-decode';

//Constantes de sesion storage
const TOKEN_KEY = 'AuthToken';
const USUARIO_KEY = 'AuthUsuario';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  //Getters and Setters
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);

    // const deco = jwtDecode(token);
    // console.log(deco);
  }

  public getToken(): string{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public setUsuario(usuario: string): void {
    window.sessionStorage.removeItem(USUARIO_KEY);
    window.sessionStorage.setItem(USUARIO_KEY, usuario);
  }

  public getUsuario(): string{
    return window.sessionStorage.getItem(USUARIO_KEY);
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    const roles: string[] = [];
    if(sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(rol => {
        roles.push(rol)
      })
    }
    return roles;
  }

  public cerrarSesion(): void {
    window.sessionStorage.clear();
  }


  // public getUsuario(): string {
  //   let userName = '';
  //   if(this.getToken()) {
  //     const sub = jwt_decode(this.getToken()).sub;
  //     userName = sub;
  //   }
  //   return userName;
  // }

  // isAdmin(): boolean {
  //   if(this.getToken()) {
  //     const sub = jwt_decode(this.getToken()).sub;
  //     return (sub === 'admin');
  //   }
  //   return false;
  // }

  // public logOut(): void {
  //   window.sessionStorage.clear();
  // }

}
