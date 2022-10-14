import { Rol } from "./rol";
import { Socio } from "./Socio";

export class Usuario {

    id?: Number;
    usuario: string;
    password: string;
    socio: Socio;
    roles: Set<Rol>;
    mensaje: string;

    constructor(usuario: string, password: string, socio: Socio) {
        this.usuario = usuario;
        this.password = password;
        this.socio = socio;
    }

    public getRoles(): Set<Rol>{
        return this.roles;
    }

    public setRoles(roles: Set<Rol>){
        this.roles = roles;
    }

    public getMensaje(): string{
        return this.mensaje;
    }

    public setMensaje(mensaje: string){
        this.mensaje = mensaje;
    }

}