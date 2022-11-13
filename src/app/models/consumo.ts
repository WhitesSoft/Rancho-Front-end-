import { Factura } from "./factura";
import { Medidor } from "./medidor";

export class Consumo {

    id?: Number;
    fecha: String;
    lectura: Number;
    medidor: Medidor;
    factura: Factura;

    constructor(fecha: String, lectura: Number, medidor: Medidor, factura: Factura){
        this.fecha = fecha;
        this.lectura = lectura;
        this.medidor = medidor;
        this.factura = factura;
    }

}
