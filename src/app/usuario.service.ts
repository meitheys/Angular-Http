import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuarios'

  constructor(private http: HttpClient) { }

  //Doing Post of the Usuary
  createUsuario(usuario: Object): Observable<Object>{
    return this.http.post(`${this.url+'/save'}`, usuario);
  }

  //Getting the usuary
  getUsuario(id: number): Observable<any>{
   return this.http.get(`${this.url+'/findById'}/${id}`);
  }

  getUsuarioList(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url+'/findUsuarios'}`);
  }

}
