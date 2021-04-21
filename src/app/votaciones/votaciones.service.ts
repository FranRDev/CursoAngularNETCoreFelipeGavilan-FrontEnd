import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VotacionesService {

  private readonly urlApi = environment.urlApi + 'votaciones';

  constructor(private httpClient: HttpClient) { }

  votar(peliculaId: number, puntuacion: number) {
    return this.httpClient.post(this.urlApi, { peliculaId, puntuacion });
  }

}