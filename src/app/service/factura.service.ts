import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  facturaURL = 'https://localhost:9090/facturas/';

  constructor(
    private httpClient: HttpClient
  ) { }

  //metodos del backend
  //listar todas las facturas
  public listaFacturas(): Observable<Factura[]> {
    return this.httpClient.get<Factura[]>(this.facturaURL + 'lista');
  }

  //ver factura por id
  public detallesFactura(id: number): Observable<Factura> {
    return this.httpClient.get<Factura>(this.facturaURL + `detalles/${id}`);
  }

  //crear factura
  public crearFactura(factura: Factura): Observable<Factura> {
    return this.httpClient.post<Factura>(this.facturaURL + 'crearfactura', factura);
  }

  //actualizar factura
  public actualizarFactura(id: number, factura: Factura): Observable<any> {
    return this.httpClient.put<any>(this.facturaURL + `actualizar/${id}`, factura);
  }

   //eliminar tarifa
   public eliminarFactura(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.facturaURL + `eliminar/${id}`);
  }

}
