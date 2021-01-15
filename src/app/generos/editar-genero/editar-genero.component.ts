import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {

  modelo: GeneroCreacionDTO = { nombre: 'Drama' };

  constructor(private router: Router) { }

  guardar(genero: GeneroCreacionDTO) {
    // Guardar los cambios.
    console.log(genero);
    this.router.navigate(['/generos']);
  }

}