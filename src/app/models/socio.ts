export class Socio {

    idSocio?: number;
    nombres: string;
    apellidos: string;
    correo: string;
    fechaNacimiento: string;
    direccion: string;
    foto: string
    activo: boolean;

    //Los nombres de las variebles tiene que ser igual al de la entidad (backend)

    constructor(nombres: string, apellidos: string, correo: string, fechaNacimiento: string, direccion: string, foto: string, activo: boolean) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo = correo;  
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.foto = foto;
        this.activo = activo;
    }

}