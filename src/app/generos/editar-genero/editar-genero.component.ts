import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { GeneroCreacionDTO, GeneroDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  modelo: GeneroDTO;
  errores: string[] = [];

  constructor(private router: Router, private generosService: GenerosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      this.generosService.obtenerPorId(parametros.id).subscribe(genero => this.modelo = genero, () => this.router.navigate(['/generos']));
    });
  }

  guardar(genero: GeneroCreacionDTO) {
    this.generosService.editar(this.modelo.id, genero).subscribe(
      () => this.router.navigate(['/generos']),
      error => this.errores = parsearErroresApi(error)
    );

  }

}