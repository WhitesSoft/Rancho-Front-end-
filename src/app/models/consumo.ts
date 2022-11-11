import { Medidor } from "./medidor";

export class Consumo {

    id?: Number;
    fecha: String;
    lectura: Number;
    medidor: Medidor;

    constructor(fecha: String, lectura: Number, medidor: Medidor){
        this.fecha = fecha;
        this.lectura = lectura;
        this.medidor = medidor;
    }

}
