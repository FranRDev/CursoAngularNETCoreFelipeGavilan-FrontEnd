import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utilidades';
import { ActorCreacionDTO } from './actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private urlApi = environment.urlApi + 'actores';

  constructor(private httpClient: HttpClient) { }

  private construirDatosFormulario(actor: ActorCreacionDTO): FormData {
    const datosFormulario = new FormData();
    datosFormulario.append('nombre', actor.nombre);
    if (actor.biografia) { datosFormulario.append('biografia', actor.biografia); }
    if (actor.fechaNacimiento) { datosFormulario.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento)); }
    if (actor.foto) { datosFormulario.append('foto', actor.foto); }

    return datosFormulario;
  }

  public crear(actor: ActorCreacionDTO) {
    const datosFormulario = this.construirDatosFormulario(actor);
    return this.httpClient.post(this.urlApi, datosFormulario);
  }

}
