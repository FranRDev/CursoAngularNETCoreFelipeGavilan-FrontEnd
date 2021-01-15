import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  constructor(private router: Router) { }

  guardar(genero: GeneroCreacionDTO) {
    // Guardar los cambios.
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}