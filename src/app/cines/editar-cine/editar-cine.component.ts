import { Component } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {

  modelo: CineDTO = { nombre: "Yelmo Premium Lagoh", latitud: 37.3416145027204, longitud: -365.9859395027161 };

  constructor() { }

  guardar(cine: CineCreacionDTO) {
    console.log(cine);
  }

}
