import { Socio } from "./socio";

export class Solicitud {

    id?: number;
    detalle: string;
    fecha: string;
    atendido: boolean;
    socio: Socio;

    constructor(detalle: string, fecha: string, atendido: boolean, socio: Socio){
        this.detalle = detalle;
        this.fecha = fecha;
        this.atendido = atendido;
        this.socio = socio;
    }

}