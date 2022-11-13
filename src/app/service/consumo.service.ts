import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumo } from '../models/consumo';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  consumoURL = 'https://localhost:9090/consumos/';

  constructor(
    private httpClient: HttpClient
  ) { }

  //metodos del backend
  //listar consumos
  public listaConsumos(): Observable<Consumo[]> {
    return this.httpClient.get<Consumo[]>(this.consumoURL + 'lista');
  }

  //listar consumos del medidor
  public listaConsumosMedidor(id: number): Observable<Consumo[]> {
    return this.httpClient.get<Consumo[]>(this.consumoURL + `medidor/${id}/listaconsumos`);
  }

  //ver detalle del consumo por id
  public detallesConsumo(id: number): Observable<Consumo> {
    return this.httpClient.get<Consumo>(this.consumoURL + `detalles/${id}`);
  }

  //crear consumo para medidor
  public crearConsumo(id: number, consumo: Consumo): Observable<Consumo> {
    return this.httpClient.post<Consumo>(this.consumoURL + `medidor/${id}/crearconsumo`, consumo);
  }

  //actualizar consumo
  public actualizarConsumo(id: number, consumo: Consumo): Observable<any> {
    return this.httpClient.put<any>(this.consumoURL + `actualizar/${id}`, consumo);
  }

  //eliminar consumo
  public eliminarConsumo(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.consumoURL + `eliminar/${id}`);
  }

  //eliminar todos los medidores del socio
  public eliminarConsumosMedidor(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.consumoURL + `medidor/${id}/eliminarconsumos`);
  }

}
