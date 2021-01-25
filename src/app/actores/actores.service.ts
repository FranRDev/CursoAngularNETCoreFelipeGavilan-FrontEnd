import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utilidades';
import { ActorCreacionDTO, ActorDTO } from './actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private urlApi = environment.urlApi + 'actores';

  constructor(private httpClient: HttpClient) { }

  public borrar(id: number) {
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }

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

  public editar(id: number, actor: ActorCreacionDTO) {
    const datosFormulario = this.construirDatosFormulario(actor);
    return this.httpClient.put(`${this.urlApi}/${id}`, datosFormulario);
  }

  public obtenerPorId(id: number) {
    return this.httpClient.get<ActorDTO>(`${this.urlApi}/${id}`);
  }

  public obtenerTodos(pagina: number, registros: number): Observable<any> {
    let parametros = new HttpParams();
    parametros = parametros.append('Pagina', pagina.toString());
    parametros = parametros.append('Registros', registros.toString());
    return this.httpClient.get<ActorDTO[]>(this.urlApi, { observe: 'response', params: parametros });
  }

}
