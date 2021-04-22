import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CredencialesUsuarioDTO, RespuestaAutenticacionDTO, UsuarioDTO } from './seguridad';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private readonly llaveExpiracion = 'expiracion';
  private readonly llaveToken = 'token';
  private readonly campoRol = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
  private readonly urlApi = environment.urlApi + 'cuentas';

  constructor(private httpClient: HttpClient) { }

  anhadirAdmin(idUsuario: string) {
    const cabeceras = new HttpHeaders('Content-Type: application/json');
    return this.httpClient.post(`${this.urlApi}/AnhadirAdmin`, JSON.stringify(idUsuario), { headers: cabeceras });
  }

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
    return this.obtenerCampoJWT(this.campoRol);
  }

  obtenerToken(): string {
    return localStorage.getItem(this.llaveToken);
  }

  public obtenerUsuarios(pagina: number, registros: number): Observable<any> {
    let parametros = new HttpParams();
    parametros = parametros.append('Pagina', pagina.toString());
    parametros = parametros.append('Registros', registros.toString());
    return this.httpClient.get<UsuarioDTO[]>(`${this.urlApi}/Usuarios`, { observe: 'response', params: parametros });
  }
  
  quitarAdmin(idUsuario: string) {
    const cabeceras = new HttpHeaders('Content-Type: application/json');
    return this.httpClient.post(`${this.urlApi}/QuitarAdmin`, JSON.stringify(idUsuario), { headers: cabeceras });
  }

  registrar(credenciales: CredencialesUsuarioDTO): Observable<RespuestaAutenticacionDTO> {
    return this.httpClient.post<RespuestaAutenticacionDTO>(this.urlApi + '/Crear', credenciales);
  }

}