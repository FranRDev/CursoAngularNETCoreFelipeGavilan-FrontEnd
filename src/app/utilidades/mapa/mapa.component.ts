import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordenadas } from './coordenadas';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  opciones = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 11,
    center: latLng(37.360163949906394, -5.86959600448614)
  };

  marcadores: Marker<any>[] = [];

  @Input()
  coordenadasIniciales: Coordenadas[] = [];

  @Output()
  coordenadasSeleccionada: EventEmitter<Coordenadas> = new EventEmitter<Coordenadas>();

  constructor() { }

  ngOnInit(): void {
    this.marcadores = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud]));
  }

  mapaCliqueado(lme: LeafletMouseEvent) {
    const latitud = lme.latlng.lat;
    const longitud = lme.latlng.lng;
    console.log({latitud, longitud});

    this.marcadores = [];
    this.marcadores.push(marker([latitud, longitud]));
    this.coordenadasSeleccionada.emit({ latitud: latitud, longitud: longitud });
  }

}
