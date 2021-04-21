export interface CredencialesUsuarioDTO {
    correo: string;
    clave: string;
}

export interface RespuestaAutenticacionDTO {
    token: string;
    expiracion: Date;
}