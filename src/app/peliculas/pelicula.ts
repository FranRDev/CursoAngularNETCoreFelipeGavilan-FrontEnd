import { CineDTO } from "../cines/cine";
import { GeneroDTO } from "../generos/genero";

export interface PeliculaDTO {
    titulo: string;
    poster: string;
    sinopsis: string;
    trailer: string;
    fechaLanzamiento: Date;
    enCartelera: boolean;
}

export interface PeliculaCreacionDTO {
    titulo: string;
    poster: string;
    sinopsis: string;
    trailer: string;
    fechaLanzamiento: Date;
    enCartelera: boolean;
}

export interface PeliculaPostGet {
    cines: CineDTO[];
    generos: GeneroDTO[];
}