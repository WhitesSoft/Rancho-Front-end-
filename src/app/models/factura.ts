export class Factura {

    id?: Number;
    razonSocial: String;
    nit: String;
    periodo: String;
    monto: Number;
    estado: boolean;

    constructor(razonSocial: String, nit: String, periodo: String, monto: Number, estado: boolean){
        this.razonSocial = razonSocial;
        this.nit = nit;
        this.periodo = periodo;
        this.monto = monto;
        this.estado = estado;
    }


}
