import { Socio } from "./socio";

export class NuevoUsuario {

    //los nombres de las variables deben ser igual a los del backend
    usuario: string;
    password: string;
    socio: Socio;
    roles: Set<string>;

    constructor(usuario: string, password: string, socio: Socio){
        this.usuario = usuario;
        this.password = password;
        this.socio = socio;
    }

    getRoles(): Set<String>{
        return this.roles;
    }

    setRoles(roles: Set<string>){
        this.roles = roles;
    }

}
