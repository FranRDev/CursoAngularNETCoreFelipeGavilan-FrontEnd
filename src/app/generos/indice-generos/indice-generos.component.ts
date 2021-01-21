import { Component, OnInit } from '@angular/core';
import { GeneroDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  columnasAMostrar = ['id', 'nombre', 'acciones'];

  generos: GeneroDTO[];

  constructor(private generosService: GenerosService) { }

  ngOnInit(): void {
    this.generosService.obtenerTodos().subscribe(generos => this.generos = generos, error => console.error(error));
  }

}
