import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarifa } from '../models/tarifa';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  tarifaURL = 'https://localhost:9090/tarifas/';

  constructor(
    private httpClient: HttpClient
  ) { }

  //metodos del backend
  //listar todas las tarifas
  public listaTarifas(): Observable<Tarifa[]> {
    return this.httpClient.get<Tarifa[]>(this.tarifaURL + 'lista');
  }

  //ver tarifa por id
  public detallesTarifa(id: number): Observable<Tarifa> {
    return this.httpClient.get<Tarifa>(this.tarifaURL + `detalles/${id}`);
  }

  //crear tarifa
  public crearTarifa(tarifa: Tarifa): Observable<Tarifa> {
    return this.httpClient.post<Tarifa>(this.tarifaURL + 'creartarifa', tarifa);
  }

  //actualizar tarifa
  public actualizarTarifa(id: number, tarifa: Tarifa): Observable<any> {
    return this.httpClient.put<any>(this.tarifaURL + `actualizar/${id}`, tarifa);
  }

   //eliminar tarifa
   public eliminarTarifa(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.tarifaURL + `eliminar/${id}`);
  }

}
