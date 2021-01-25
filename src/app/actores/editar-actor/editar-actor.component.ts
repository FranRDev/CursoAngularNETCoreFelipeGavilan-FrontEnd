import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { ActorCreacionDTO, ActorDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  modelo: ActorDTO;
  errores: string[] = [];

  constructor(private router: Router, private actoresService: ActoresService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      this.actoresService.obtenerPorId(parametros.id).subscribe(
        actor => this.modelo = actor,
        () => this.router.navigate(['/actores'])
      );
    });
  }

  guardar(actor: ActorCreacionDTO) {
    this.actoresService.editar(this.modelo.id, actor).subscribe(
      () => this.router.navigate(['/actores']),
      error => this.errores = parsearErroresApi(error)
    );
  }

}
