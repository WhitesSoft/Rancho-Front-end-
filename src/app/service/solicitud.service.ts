import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  solicitudURL = 'https://localhost:9090/solicitudes/';

  constructor(
    private httpClient: HttpClient
  ) { }

  //metodos del backend
  //listar solicitudes
  public listaSolicitudes(): Observable<Solicitud[]> {
    return this.httpClient.get<Solicitud[]>(this.solicitudURL + 'lista');
  }

  //listar solicitudes del socio
  public listaSolicitudesSocio(id: number): Observable<Solicitud[]> {
    return this.httpClient.get<Solicitud[]>(this.solicitudURL + `socio/${id}/listasolicitudes`);
  }

  //ver solicitud por id
  public detallesSolicitud(id: number): Observable<Solicitud> {
    return this.httpClient.get<Solicitud>(this.solicitudURL + `detalles/${id}`);
  }

  //crear solicitud
  public crearSolicitud(id: number, solicitud: Solicitud): Observable<Solicitud> {
    return this.httpClient.post<Solicitud>(this.solicitudURL + `socio/${id}/crearsolicitud`, solicitud);
  }

  //actualizar solicitud
  public actualizarSolicitud(id: number, solicitud: Solicitud): Observable<any> {
    return this.httpClient.put<any>(this.solicitudURL + `actualizar/${id}`, solicitud);
  }

   //eliminar solicitud
   public eliminarSolicitud(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.solicitudURL + `eliminar/${id}`);
  }

  //eliminar todas las solicitudes del socio
  public eliminarSolicitudesSocio(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.solicitudURL + `socio/${id}/eliminarsolicitudes`);
  }

}
