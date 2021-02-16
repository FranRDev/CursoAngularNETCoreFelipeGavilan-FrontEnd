import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorPeliculaDTO } from 'src/app/actores/actor';
import { ElementoSelectorMultiple } from 'src/app/utilidades/selector-multiple/selector-multiple';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  actoresSeleccionados: ActorPeliculaDTO[];
  cinesNoSeleccionados: ElementoSelectorMultiple[];
  cinesSeleccionados: ElementoSelectorMultiple[];
  generosNoSeleccionados: ElementoSelectorMultiple[];
  generosSeleccionados: ElementoSelectorMultiple[];
  modelo: PeliculaDTO;

  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      this.peliculasService.putGet(parametros.id).subscribe(peliculaPutGet => {
        this.actoresSeleccionados = peliculaPutGet.actores;
        this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map(cine => { return <ElementoSelectorMultiple>{ llave: cine.id, valor: cine.nombre } });
        this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map(cine => { return <ElementoSelectorMultiple>{ llave: cine.id, valor: cine.nombre } });
        this.generosNoSeleccionados = peliculaPutGet.generosNoSeleccionados.map(genero => { return <ElementoSelectorMultiple>{ llave: genero.id, valor: genero.nombre } });
        this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map(genero => { return <ElementoSelectorMultiple>{ llave: genero.id, valor: genero.nombre } });
        this.modelo = peliculaPutGet.pelicula;
      }, error => console.log(error))
    })
  }

  guardar(pelicula: PeliculaCreacionDTO) {
    this.peliculasService.editar(this.modelo.id, pelicula).subscribe(() => this.router.navigate(['/peliculas/' + this.modelo.id]));
  }

}
