import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CineCreacionDTO, CineDTO } from './cine';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  private urlApi = environment.urlApi + 'cines';

  constructor(private httpClient: HttpClient) { }

  public borrar(id: number) {
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }

  public crear(cine: CineCreacionDTO) {
    return this.httpClient.post(this.urlApi, cine);
  }

  public editar(id: number, cine: CineCreacionDTO) {
    return this.httpClient.put(`${this.urlApi}/${id}`, cine);
  }

  public obtenerPorId(id: number) {
    return this.httpClient.get<CineDTO>(`${this.urlApi}/${id}`);
  }

  public obtenerTodos(pagina: number, registros: number): Observable<any> {
    let parametros = new HttpParams();
    parametros = parametros.append('Pagina', pagina.toString());
    parametros = parametros.append('Registros', registros.toString());
    return this.httpClient.get<CineDTO[]>(this.urlApi, { observe: 'response', params: parametros });
  }

}
