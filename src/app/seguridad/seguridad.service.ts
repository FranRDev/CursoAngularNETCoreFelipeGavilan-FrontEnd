import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CredencialesUsuarioDTO, RespuestaAutenticacionDTO } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private urlApi = environment.urlApi + 'cuentas';

  constructor(private httpClient: HttpClient) { }

  haAutenticado(): boolean {
    return false;
  }

  obtenerRol(): string {
    return 'admin';
  }

  registrar(credenciales: CredencialesUsuarioDTO) : Observable<RespuestaAutenticacionDTO> {
    return this.httpClient.post<RespuestaAutenticacionDTO>(this.urlApi + '/Crear', credenciales);
  }

}