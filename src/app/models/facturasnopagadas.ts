export class Facturasnopagadas {

    nombres: string;
    fechaFacturaVencida: string;
    idSocio: number;
    diasRetraso: number

    constructor(nombres: string, fechaFacturaVencida: string, idSocio: number, diasRetraso: number){
        this.nombres = nombres;
        this.fechaFacturaVencida = fechaFacturaVencida;
        this.idSocio = idSocio;
        this.diasRetraso = diasRetraso;
    }

}
