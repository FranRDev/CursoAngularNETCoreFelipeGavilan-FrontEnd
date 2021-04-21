import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CredencialesUsuarioDTO, RespuestaAutenticacionDTO } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private readonly llaveExpiracion = 'expiracion';
  private readonly llaveToken = 'token';
  private readonly urlApi = environment.urlApi + 'cuentas';

  constructor(private httpClient: HttpClient) { }

  cerrarSesion() {
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
  }

  guardarToken(respuestaAutenticacion: RespuestaAutenticacionDTO) {
    localStorage.setItem(this.llaveToken, respuestaAutenticacion.token);
    localStorage.setItem(this.llaveExpiracion, respuestaAutenticacion.expiracion.toString());
  }

  haAutenticado(): boolean {
    const token = localStorage.getItem(this.llaveToken);

    if (!token) {
      return false;
    }

    const expiracion = new Date(localStorage.getItem(this.llaveExpiracion));

    if (expiracion <= new Date()) {
      this.cerrarSesion();
      return false;
    }

    return true;
  }

  iniciarSesion(credenciales: CredencialesUsuarioDTO): Observable<RespuestaAutenticacionDTO> {
    return this.httpClient.post<RespuestaAutenticacionDTO>(this.urlApi + '/IniciarSesion', credenciales);
  }

  obtenerCampoJWT(campo: string): string {
    const token = localStorage.getItem(this.llaveToken);
    if (!token) { return ''; }
    var datosJWT = JSON.parse(atob(token.split('.')[1]));
    return datosJWT[campo];
  }

  obtenerRol(): string {
    return '';
  }

  obtenerToken(): string {
    return localStorage.getItem(this.llaveToken);
  }

  registrar(credenciales: CredencialesUsuarioDTO): Observable<RespuestaAutenticacionDTO> {
    return this.httpClient.post<RespuestaAutenticacionDTO>(this.urlApi + '/Crear', credenciales);
  }

}