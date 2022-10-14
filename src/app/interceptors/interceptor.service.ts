import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  //Aqui pasamos el token por las cabeceras (intercepta cada peticion) 
  //verificando el token en el session storage

  constructor(
    private tokenService: TokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authReq = req;
    const token = this.tokenService.getToken();

    //comprobamos si hay token en session storage
    if(token != null){
      authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)});
    }

    return next.handle(authReq);

  }

}

export const interceptorProvider = [ { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true } ]