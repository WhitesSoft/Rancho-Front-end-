import { Socio } from "./Socio";

export class Usuario {

    id?: Number;
    usuario: string;
    password: string;
    estadoPassword: boolean;
    socio: Socio;
    roles: any[];

    constructor(usuario: string, password: string, estadoPassword: boolean, socio: Socio, roles: any[]) {
        this.usuario = usuario;
        this.password = password;
        this.estadoPassword = estadoPassword;
        this.socio = socio;
        this.roles = roles
    }

}