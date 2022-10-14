export class JwtDto {
    //los nombres de las variables deben ser igual a los del backend
    token: string;
    usuario: string;
    authorities: string[];
}
