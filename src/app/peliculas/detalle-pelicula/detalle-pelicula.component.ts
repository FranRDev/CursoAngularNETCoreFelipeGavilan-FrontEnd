import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CoordenadasConMensaje } from 'src/app/utilidades/mapa/coordenadas';
import { VotacionesService } from 'src/app/votaciones/votaciones.service';
import Swal from 'sweetalert2';
import { PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  coordenadas: CoordenadasConMensaje[];
  fechaLanzamiento: Date;
  pelicula: PeliculaDTO;
  trailer: SafeResourceUrl;

  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute, private domSanitizer: DomSanitizer,
    private votacionesService: VotacionesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      parametros => {
        this.peliculasService.obtenerPorId(parametros.id).subscribe(
          pelicula => {
            console.log(pelicula);
            this.pelicula = pelicula;
            this.fechaLanzamiento = new Date(this.pelicula.fechaLanzamiento);
            this.trailer = this.generarUrlYouTubeSegura(this.pelicula.trailer);
            this.coordenadas = pelicula.cines.map(cine => {
              return { longitud: cine.longitud, latitud: cine.latitud, mensaje: cine.nombre }
            });
          },
          error => console.error(error))
      },
      error => console.error(error))
  }

  private generarUrlYouTubeSegura(url: any): SafeResourceUrl {
    if (!url) { return ''; }

    var idVideo = url.split('v=')[1];
    var posicionAmpersand = idVideo.indexOf('&');

    if (posicionAmpersand !== -1) {
      idVideo = idVideo.substring(0, posicionAmpersand);
    }

    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${idVideo}`);
  }

  valorar(puntuacion: number) {
    this.votacionesService.votar(this.pelicula.id, puntuacion)
      .subscribe(() => Swal.fire("Genial", "Votación realizada con éxito", "success"));
  }

}
