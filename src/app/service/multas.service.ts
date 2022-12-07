import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Multa } from '../models/multa';

@Injectable({
  providedIn: 'root'
})
export class MultasService {

  multasURL = 'https://localhost:9090/multas/';

  constructor(
    private httpClient: HttpClient
  ) { }


  //metodos del backend

  //crear multa
  public crearMulta(id: number, multa: Multa): Observable<Multa> {
    return this.httpClient.post<Multa>(this.multasURL + `socio/${id}/crearmulta`, multa);
  }

  //listar multas
  public listaMultas(): Observable<Multa[]> {
    return this.httpClient.get<Multa[]>(this.multasURL + 'lista');
  }

  //listar multas del socio
  public listaMultasSocio(id: number): Observable<Multa[]> {
    return this.httpClient.get<Multa[]>(this.multasURL + `socio/${id}/listamultas`);
  }

  //ver detalle de la multa por id
  public detallesMulta(id: number): Observable<Multa> {
    return this.httpClient.get<Multa>(this.multasURL + `detalles/${id}`);
  }

  //actualizar multa
  public actualizarMulta(id: number, multa: Multa): Observable<any> {
    return this.httpClient.put<any>(this.multasURL + `actualizar/${id}`, multa);
  }

  //eliminar multa
  public eliminarMulta(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.multasURL + `eliminar/${id}`);
  }

  //eliminar todos las multas del socio
  public eliminarMultasSocio(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.multasURL + `socio/${id}/eliminarmultas`);
  }

}
