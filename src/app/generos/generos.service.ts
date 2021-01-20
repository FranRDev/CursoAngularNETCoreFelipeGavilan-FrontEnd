import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GeneroDTO } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private urlApi = environment.urlApi;

  constructor(private httpClient: HttpClient) { }

  public obtenerTodos(): Observable<GeneroDTO[]> {
    return this.httpClient.get<GeneroDTO[]>(this.urlApi);
  }
}
