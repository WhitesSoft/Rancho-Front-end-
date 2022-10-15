import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medidor } from '../models/medidor';

@Injectable({
  providedIn: 'root'
})
export class MedidorService {

  medidorURL = 'https://localhost:9090/medidor/';

  constructor(
    private httpClient: HttpClient
  ) { }

  //metodos del backend

  //crear medidor
  public crearMedidor(id: number, medidor: Medidor): Observable<Medidor> {
    return this.httpClient.post<Medidor>(this.medidorURL + `socio/${id}/crearmedidor`, medidor);
  }

  //listar medidores
  public listaMedidores(): Observable<Medidor[]> {
    return this.httpClient.get<Medidor[]>(this.medidorURL + 'lista');
  }

  //listar medidores del socio
  public listaMedidoresSocio(id: number): Observable<Medidor[]> {
    return this.httpClient.get<Medidor[]>(this.medidorURL + `socio/${id}/listamedidores`);
  }

  //ver detalle del medidor por id
  public detallesMedidor(id: number): Observable<Medidor> {
    return this.httpClient.get<Medidor>(this.medidorURL + `detalles/${id}`);
  }

  //actualizar medidor
  public actualizarMedidor(id: number, medidor: Medidor): Observable<any> {
    return this.httpClient.put<any>(this.medidorURL + `actualizar/${id}`, medidor);
  }

  //eliminar medidor
  public eliminarMedidor(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.medidorURL + `eliminar/${id}`);
  }

  //eliminar todos los medidores del socio
  public eliminarMedidoresSocio(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.medidorURL + `socio/${id}/eliminarmedidores`);
  }

}
