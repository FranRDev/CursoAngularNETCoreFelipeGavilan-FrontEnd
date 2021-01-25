import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneroCreacionDTO, GeneroDTO } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private urlApi = environment.urlApi + 'generos';

  constructor(private httpClient: HttpClient) { }

  public borrar(id: number) {
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }

  public crear(genero: GeneroCreacionDTO) {
    return this.httpClient.post(this.urlApi, genero);
  }

  public editar(id: number, genero: GeneroCreacionDTO) {
    return this.httpClient.put(`${this.urlApi}/${id}`, genero);
  }

  public obtenerPorId(id: number) {
    return this.httpClient.get<GeneroDTO>(`${this.urlApi}/${id}`);
  }

  public obtenerTodos(pagina: number, registros: number): Observable<any> {
    let parametros = new HttpParams();
    parametros = parametros.append('Pagina', pagina.toString());
    parametros = parametros.append('Registros', registros.toString());
    return this.httpClient.get<GeneroDTO[]>(this.urlApi, {observe: 'response', params: parametros});
  }

}
