export interface ActorDTO {
    nombre: string;
    fechaNacimiento: Date;
    foto: string;
}

export interface ActorCreacionDTO {
    nombre: string;
    fechaNacimiento: Date;
    foto: File;
}