import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { ActorPeliculaDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-autocompletar-actor',
  templateUrl: './autocompletar-actor.component.html',
  styleUrls: ['./autocompletar-actor.component.css']
})
export class AutocompletarActorComponent implements OnInit {

  actoresAMostrar: ActorPeliculaDTO[] = [];

  control: FormControl = new FormControl();

  columnasAMostrar = ['foto', 'nombre', 'personaje', 'acciones'];

  @Input()
  actoresSeleccionados: ActorPeliculaDTO[] = [];

  @ViewChild(MatTable) tabla: MatTable<any>;

  constructor(private actoresService: ActoresService) { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(nombre => {
      this.actoresService.obtenerPorNombre(nombre)
        .subscribe(
          actores => this.actoresAMostrar = actores,
          error => console.error(error)
        );
    });
  }

  obtenerOpcionSeleccionada(mase: MatAutocompleteSelectedEvent) {
    this.actoresSeleccionados.push(mase.option.value);
    this.control.patchValue('');

    if (this.tabla !== undefined) {
      this.tabla.renderRows();
    }
  }

  obtenerElementoArrastrado(cdd: CdkDragDrop<any[]>) {
    const indiceOriginal = this.actoresSeleccionados.findIndex(actor => actor === cdd.item.data);
    moveItemInArray(this.actoresSeleccionados, indiceOriginal, cdd.currentIndex);
    this.tabla.renderRows();
  }

  eliminar(actor: { nombre: any; }) {
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.tabla.renderRows();
  }

}
