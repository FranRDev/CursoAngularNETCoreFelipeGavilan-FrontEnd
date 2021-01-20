import { HttpClient } from '@angular/common/http';
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

  public obtenerTodos(): Observable<GeneroDTO[]> {
    return this.httpClient.get<GeneroDTO[]>(this.urlApi);
  }

  public crear(genero: GeneroCreacionDTO) {
    return this.httpClient.post(this.urlApi, genero);
  }

}
