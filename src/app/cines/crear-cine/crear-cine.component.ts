import { Component } from '@angular/core';
import { CineCreacionDTO } from '../cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent {

  constructor() { }

  guardar(cine: CineCreacionDTO) {
    console.log(cine);
  }

}
