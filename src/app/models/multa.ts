import { Socio } from "./socio";

export class Multa {

    id?: number;
    fechaVigencia: string;
    monto: number;
    estado: boolean;
    socio: Socio;

    constructor(fechaVigencia: string, monto: number, estado: boolean, socio: Socio){
        this.fechaVigencia = fechaVigencia;
        this.monto = monto;
        this.estado = estado;
        this.socio = socio;
    }

}
