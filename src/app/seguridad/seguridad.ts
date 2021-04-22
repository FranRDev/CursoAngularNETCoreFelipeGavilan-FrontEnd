export interface CredencialesUsuarioDTO {
    correo: string;
    clave: string;
}

export interface RespuestaAutenticacionDTO {
    token: string;
    expiracion: Date;
}

export interface UsuarioDTO {
    id: string;
    correo: string;
}