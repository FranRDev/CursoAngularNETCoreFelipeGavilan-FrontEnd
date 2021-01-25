import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActorCreacionDTO } from './actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private urlApi = environment.urlApi + 'actores';

  constructor(private httpClient: HttpClient) { }

  public crear(actor: ActorCreacionDTO) {
    return this.httpClient.post(this.urlApi, actor);
  }

}
