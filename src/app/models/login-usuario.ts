export class LoginUsuario {
    
    //los nombres de las variables deben ser igual a los del backend
    usuario: string;
    password: string;

    constructor(usuario: string, password: string){
        this.usuario = usuario;
        this.password = password;
    }

}
