import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { CineCreacionDTO, CineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  modelo: CineDTO;
  errores: string[] = [];

  constructor(private router: Router, private cinesService: CinesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      this.cinesService.obtenerPorId(parametros.id).subscribe(
        cine => this.modelo = cine,
        () => this.router.navigate(['/cines'])
      );
    });
  }

  guardar(cine: CineCreacionDTO) {
    this.cinesService.editar(this.modelo.id, cine).subscribe(
      () => this.router.navigate(['/cines']),
      error => this.errores = parsearErroresApi(error)
    );
  }

}
