import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utilidades';
import { PaginaInicioDTO, PeliculaCreacionDTO, PeliculaDTO, PeliculaPostGet, PeliculaPutGet } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private urlApi = environment.urlApi + 'peliculas';

  constructor(private httpClient: HttpClient) { }

  // public borrar(id: number) {
  //   return this.httpClient.delete(`${this.urlApi}/${id}`);
  // }

  private construirDatosFormulario(pelicula: PeliculaCreacionDTO): FormData {
    const datosFormulario = new FormData();
    datosFormulario.append('titulo', pelicula.titulo);
    datosFormulario.append('sinopsis', pelicula.sinopsis);
    datosFormulario.append('trailer', pelicula.trailer);
    datosFormulario.append('cartelera', String(pelicula.cartelera));
    if (pelicula.fechaLanzamiento) { datosFormulario.append('fechaLanzamiento', formatearFecha(pelicula.fechaLanzamiento)); }
    if (pelicula.poster) { datosFormulario.append('poster', pelicula.poster); }
    datosFormulario.append('actores', JSON.stringify(pelicula.actores));
    datosFormulario.append('idsCines', JSON.stringify(pelicula.idsCines));
    datosFormulario.append('idsGeneros', JSON.stringify(pelicula.idsGeneros));
    return datosFormulario;
  }

  public crear(pelicula: PeliculaCreacionDTO) {
    const datosFormulario = this.construirDatosFormulario(pelicula);
    return this.httpClient.post(this.urlApi, datosFormulario);
  }

  public editar(id: number, pelicula: PeliculaCreacionDTO) {
    const datosFormulario = this.construirDatosFormulario(pelicula);
    return this.httpClient.put(`${this.urlApi}/${id}`, datosFormulario);
  }

  public obtenerPaginaInicio(): Observable<PaginaInicioDTO> {
    return this.httpClient.get<PaginaInicioDTO>(this.urlApi);
  }

  public obtenerPorId(id: number): Observable<PeliculaDTO> {
    return this.httpClient.get<PeliculaDTO>(`${this.urlApi}/${id}`);
  }

  // public obtenerTodos(pagina: number, registros: number): Observable<any> {
  //   let parametros = new HttpParams();
  //   parametros = parametros.append('Pagina', pagina.toString());
  //   parametros = parametros.append('Registros', registros.toString());
  //   return this.httpClient.get<PeliculaDTO[]>(this.urlApi, { observe: 'response', params: parametros });
  // }

  public postGet(): Observable<PeliculaPostGet> {
    return this.httpClient.get<PeliculaPostGet>(`${this.urlApi}/postget`)
  }

  public putGet(id: number): Observable<PeliculaPutGet> {
    return this.httpClient.get<PeliculaPutGet>(`${this.urlApi}/putget/${id}`)
  }

}
