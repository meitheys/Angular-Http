import { Injectable } from '@angular/core';
import { Login } from '../login/login';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  sessionAttribute = 'authenticatedUser';

  public nome: String;
  public senha: String;
  private authenticatedUsuary: boolean = false;

  constructor(private http: HttpClient) { }

  authService(nome: String, senha: String){
    return this.http.get(`http://localhost:8080/valida/auth`,
    { headers: { authorization: this.createToken(nome, senha) } }).pipe(map((res) => {
      this.nome = nome;
      this.senha = senha;
      this.authenticatedUsuary = true;
    }));
  }

  createToken(nome: String, senha: String){
    return '=> ' + window.btoa(nome + "|" + senha)
  }

  logout() {
    sessionStorage.removeItem(this.sessionAttribute);
    this.nome = null;
    this.senha = null;
  }

  LoggedUser(){
    return this.authenticatedUsuary;
  }

}
