import { Component } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {

  modelo: PeliculaDTO = {
    titulo: 'Venom (2018)',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    sinopsis: 'Una peli',
    trailer: 'https://www.youtube.com/watch?v=mYTmQWZkw10&ab_channel=SonyPicturesEspa%C3%B1a',
    fechaLanzamiento: new Date(),
    enCartelera: false
  };

  constructor() { }

  guardar(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
  }

}
