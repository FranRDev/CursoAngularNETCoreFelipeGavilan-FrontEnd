import { ActorPeliculaDTO } from "../actores/actor";
import { CineDTO } from "../cines/cine";
import { GeneroDTO } from "../generos/genero";

export interface PaginaInicioDTO {
    enCartelera: PeliculaDTO[];
    proximosEstrenos: PeliculaDTO[];
}

export interface PeliculaDTO {
    id: number;
    titulo: string;
    poster: string;
    sinopsis: string;
    trailer: string;
    fechaLanzamiento: Date;
    cartelera: boolean;
    actores: ActorPeliculaDTO[];
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

export interface PeliculaPutGet {
    pelicula: PeliculaDTO;
    generosSeleccionados: GeneroDTO[];
    generosNoSeleccionados: GeneroDTO[];
    cinesSeleccionados: CineDTO[];
    cinesNoSeleccionados: CineDTO[];
    actores: ActorPeliculaDTO[];
}