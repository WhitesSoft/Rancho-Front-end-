export class Tarifa {

    id?: Number;
    fechaInicio: String;
    consumoMaximo: Number;
    costoUnitario: Number;

    constructor(fechaInicio: String, consumoMaximo: Number, costoUnitario: Number){
        this.fechaInicio = fechaInicio;
        this.consumoMaximo = consumoMaximo;
        this.costoUnitario = costoUnitario;
    }

}
