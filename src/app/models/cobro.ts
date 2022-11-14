import { Factura } from "./factura";

export class Cobro {

    id?: Number;
    fechaHora: String;
    monto: Number;
    factura: Factura;

    constructor(fechaHora: String, monto: Number, factura: Factura){
        this.fechaHora = fechaHora;
        this.monto = monto;
        this.factura = factura;
    }

}
