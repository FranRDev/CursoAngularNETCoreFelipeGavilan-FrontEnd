import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {

  constructor() { }

  guardar(pelicula: PeliculaCreacionDTO) {
    console.log(pelicula);
  }

}
