import { Usuario } from "./usuario";

export class Comunicado {

    id?: number;
    descripcion: string;
    fechaInicio: string;
    vigencia: number;
    usuario: Usuario;

    constructor(descripcion: string, fechaInicio: string, vigencia: number, usuario: Usuario){
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.vigencia = vigencia;
        this.usuario = usuario;
    }

}