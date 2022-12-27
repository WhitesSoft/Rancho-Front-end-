import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //puerto backend
  usuarioURL = 'https://localhost:9090/usuario/';

  constructor(private httpClient: HttpClient) { }

  //metodos del backend

  //listar usuarios
  public listaUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'lista');
  }

  //ver usuario por id
  public detallesUsuario(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + `detalles/${id}`);
  }

  //actualizar usuario
  public actualizarUsuario(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(this.usuarioURL + `actualizar/${id}`, usuario);
  }

  //actualizar usuario password
  public actualizarUsuarioPassword(id: number, usuario: Usuario): Observable<any> {
      return this.httpClient.put<any>(this.usuarioURL + `actualizarpassword/${id}`, usuario);
  }

  //borrar usuario
  public eliminarUsuario(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.usuarioURL + `eliminar/${id}`);
  }
  
}
