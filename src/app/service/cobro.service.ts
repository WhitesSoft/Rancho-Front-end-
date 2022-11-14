import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cobro } from '../models/cobro';

@Injectable({
  providedIn: 'root'
})
export class CobroService {

  cobrosURL = 'https://localhost:9090/cobros/';

  constructor(
    private httpClient: HttpClient
  ) { }

  //metodos del backend
  //listar todas los cobros
  public listaCobros(): Observable<Cobro[]> {
    return this.httpClient.get<Cobro[]>(this.cobrosURL + 'lista');
  }

  //ver cobro por id
  public detallesCobro(id: number): Observable<Cobro> {
    return this.httpClient.get<Cobro>(this.cobrosURL + `detalles/${id}`);
  }

  //crear cobro
  public crearCobro(cobro: Cobro): Observable<Cobro> {
    return this.httpClient.post<Cobro>(this.cobrosURL + 'crearcobro', cobro);
  }

  //actualizar cobro
  public actualizarCobro(id: number, cobro: Cobro): Observable<any> {
    return this.httpClient.put<any>(this.cobrosURL + `actualizar/${id}`, cobro);
  }

   //eliminar cobro
   public eliminarCobro(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.cobrosURL + `eliminar/${id}`);
  }

}
