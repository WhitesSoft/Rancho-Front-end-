import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comunicado } from '../models/comunicado';

@Injectable({
  providedIn: 'root'
})
export class ComunicadoService {

  comunicadoURL = 'https://localhost:9090/comunicados/';

  constructor(
    private httpClient: HttpClient
  ) { }

  //metodos del backend
  //listar Comunicados
  public listaComunicados(): Observable<Comunicado[]> {
    return this.httpClient.get<Comunicado[]>(this.comunicadoURL + 'lista');
  }

  //listar comunicados del usuario
  public listaComunicadosUsuario(id: number): Observable<Comunicado[]> {
    return this.httpClient.get<Comunicado[]>(this.comunicadoURL + `usuario/${id}/listacomunicados`);
  }

  //ver comunicados por id
  public detallesComunicado(id: number): Observable<Comunicado> {
    return this.httpClient.get<Comunicado>(this.comunicadoURL + `detalles/${id}`);
  }

  //crear comunicado
  public crearComunicado(id: number, comunicado: Comunicado): Observable<Comunicado> {
    return this.httpClient.post<Comunicado>(this.comunicadoURL + `usuario/${id}/crearcomunicado`, comunicado);
  }

  //actualizar comunicado
  public actualizarComunicado(id: number, comunicado: Comunicado): Observable<any> {
    return this.httpClient.put<any>(this.comunicadoURL + `actualizar/${id}`, comunicado);
  }

   //eliminar comunicado
   public eliminarComunicado(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.comunicadoURL + `eliminar/${id}`);
  }

  //eliminar todos los comunicados del usuario
  public eliminarComunicadosUsuario(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.comunicadoURL + `usuario/${id}/eliminarcomunicados`);
  }
}
