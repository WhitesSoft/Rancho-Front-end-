import { Socio } from "./socio";

export class Medidor {

    id?: number;
    serial: string;
    marca: string;
    registroInicio: number;
    fechaInstalacion: string;
    socio: Socio;

    constructor(serial: string, marca: string, registroInicio: number, fechaInstalacion: string, socio: Socio){
        this.serial = serial;
        this.marca = marca;
        this.registroInicio = registroInicio;
        this.fechaInstalacion = fechaInstalacion;
        this.socio = socio;
    }

}
