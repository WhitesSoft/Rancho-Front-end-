import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamo } from '../models/reclamo';

@Injectable({
  providedIn: 'root'
})
export default class ReclamoService {

  reclamosdURL = 'https://localhost:9090/reclamos/';

  constructor(
    private httpClient: HttpClient
  ) { }

  //metodos del backend
  //listar reclamos
  public listaReclamos(): Observable<Reclamo[]> {
    return this.httpClient.get<Reclamo[]>(this.reclamosdURL + 'lista');
  }

  //listar reclamos del socio
  public listaReclamosSocio(id: number): Observable<Reclamo[]> {
    return this.httpClient.get<Reclamo[]>(this.reclamosdURL + `socio/${id}/listareclamos`);
  }

  //ver reclamo por id
  public detallesReclamo(id: number): Observable<Reclamo> {
    return this.httpClient.get<Reclamo>(this.reclamosdURL + `detalles/${id}`);
  }

  //crear reclamo
  public crearReclamo(id: number, reclamo: Reclamo): Observable<Reclamo> {
    return this.httpClient.post<Reclamo>(this.reclamosdURL + `socio/${id}/crearreclamo`, reclamo);
  }

  //actualizar reclamo
  public actualizarReclamo(id: number, reclamo: Reclamo): Observable<any> {
    return this.httpClient.put<any>(this.reclamosdURL + `actualizar/${id}`, reclamo);
  }

   //eliminar solicitud
   public eliminarReclamo(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.reclamosdURL + `eliminar/${id}`);
  }

  //eliminar todas las solicitudes del socio
  public eliminarReclamosSocio(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.reclamosdURL + `socio/${id}/eliminarreclamos`);
  }

}
