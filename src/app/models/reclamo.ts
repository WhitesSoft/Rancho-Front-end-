import { Socio } from "./socio";

export class Reclamo {

    id?: number;
    detalle: string;
    fecha: string;
    fechaAtencion: string;
    atendido: boolean;
    socio: Socio;

    constructor(detalle: string, fecha: string, fechaAtencion: string, atendido: boolean, socio: Socio){
        this.detalle = detalle;
        this.fecha = fecha;
        this.fechaAtencion = fechaAtencion;
        this.atendido = atendido;
        this.socio = socio;
    }

}
