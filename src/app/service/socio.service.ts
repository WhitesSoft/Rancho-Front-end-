import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  socioURL = 'https://localhost:9090/socio/';

  constructor(
    private httpClient: HttpClient
  ) { }

  //Metodos del backend
  //listar socios
  public listaSocios(): Observable<Socio[]> {
    return this.httpClient.get<Socio[]>(this.socioURL + 'lista');
  }

  //ver detalle del socio por id
  public detallesSocio(id: number): Observable<Socio> {
    return this.httpClient.get<Socio>(this.socioURL + `detalles/${id}`);
  }

  //actualizar socio
  public actualizarSocio(id: number, socio: Socio): Observable<any> {
    return this.httpClient.put<any>(this.socioURL + `actualizar/${id}`, socio);
  }

}
