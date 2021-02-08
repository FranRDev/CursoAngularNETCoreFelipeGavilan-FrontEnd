import { ActorDTO, ActorPeliculaDTO } from "../actores/actor";
import { CineDTO } from "../cines/cine";
import { GeneroDTO } from "../generos/genero";

export interface PeliculaDTO {
    titulo: string;
    poster: string;
    sinopsis: string;
    trailer: string;
    fechaLanzamiento: Date;
    cartelera: boolean;
    actores: ActorDTO[];
    cines: CineDTO[];
    generos: GeneroDTO[];
}

export interface PeliculaCreacionDTO {
    titulo: string;
    poster: string;
    sinopsis: string;
    trailer: string;
    fechaLanzamiento: Date;
    cartelera: boolean;
    actores: ActorPeliculaDTO[];
    idsCines: number[];
    idsGeneros: number[];
}

export interface PeliculaPostGet {
    cines: CineDTO[];
    generos: GeneroDTO[];
}