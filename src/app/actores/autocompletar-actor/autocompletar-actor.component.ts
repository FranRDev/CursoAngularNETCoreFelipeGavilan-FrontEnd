import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocompletar-actor',
  templateUrl: './autocompletar-actor.component.html',
  styleUrls: ['./autocompletar-actor.component.css']
})
export class AutocompletarActorComponent implements OnInit {

  control: FormControl = new FormControl();

  actores = [
    { nombre: 'Tom Holland', personaje: '', foto: 'https://t2.gstatic.com/images?q=tbn:ANd9GcT2mdIv2oSgUO0zm7jZHboIgb1T7ligSAizsDiuDbOC94Dt8TZffj5WtNHFvoci' },
    { nombre: 'Tom Hanks', personaje: '', foto: 'https://t3.gstatic.com/images?q=tbn:ANd9GcSiXo37wjvqGOnPgsWwZ13-Xkw6fQ1PUkL79pIhHa2Tch2S0qLT3m8tqid25IIo' },
    { nombre: 'Samuel L. Jackson', personaje: '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/1200px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg' }
  ];

  actoresOriginal = this.actores;

  actoresSeleccionados = [];

  columnasAMostrar = ['foto', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) tabla: MatTable<any>;

  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    });
  }

  obtenerOpcionSeleccionada(mase: MatAutocompleteSelectedEvent) {
    console.log(mase.option.value);
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
