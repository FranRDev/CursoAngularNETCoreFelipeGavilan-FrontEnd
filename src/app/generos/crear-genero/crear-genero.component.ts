import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneroCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  constructor(private router: Router, private generosService: GenerosService) { }

  guardar(genero: GeneroCreacionDTO) {
    this.generosService.crear(genero).subscribe(() => this.router.navigate(['/generos']), error => console.error(error));
  }

}