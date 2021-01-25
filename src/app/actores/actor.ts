export interface ActorDTO {
    id: number;
    nombre: string;
    fechaNacimiento: Date;
    foto: string;
    biografia: string;
}

export interface ActorCreacionDTO {
    nombre: string;
    fechaNacimiento: Date;
    foto: File;
    biografia: string;
}