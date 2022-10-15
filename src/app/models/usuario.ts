import { Socio } from "./Socio";

export class Usuario {

    id?: Number;
    usuario: string;
    password: string;
    socio: Socio;
    roles: any[];
    mensaje: string;

    constructor(usuario: string, password: string, socio: Socio, roles: any[]) {
        this.usuario = usuario;
        this.password = password;
        this.socio = socio;
        this.roles = roles
    }

}