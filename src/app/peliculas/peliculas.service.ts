import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeliculaCreacionDTO, PeliculaDTO, PeliculaPostGet } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private urlApi = environment.urlApi + 'peliculas';

  constructor(private httpClient: HttpClient) { }

  // public borrar(id: number) {
  //   return this.httpClient.delete(`${this.urlApi}/${id}`);
  // }

  // public crear(pelicula: PeliculaCreacionDTO) {
  //   return this.httpClient.post(this.urlApi, pelicula);
  // }

  // public editar(id: number, pelicula: PeliculaCreacionDTO) {
  //   return this.httpClient.put(`${this.urlApi}/${id}`, pelicula);
  // }

  // public obtenerPorId(id: number) {
  //   return this.httpClient.get<PeliculaDTO>(`${this.urlApi}/${id}`);
  // }

  // public obtenerTodos(pagina: number, registros: number): Observable<any> {
  //   let parametros = new HttpParams();
  //   parametros = parametros.append('Pagina', pagina.toString());
  //   parametros = parametros.append('Registros', registros.toString());
  //   return this.httpClient.get<PeliculaDTO[]>(this.urlApi, { observe: 'response', params: parametros });
  // }

  public postGet(): Observable<PeliculaPostGet> {
    return this.httpClient.get<PeliculaPostGet>(`${this.urlApi}/postget`)
  }

}
