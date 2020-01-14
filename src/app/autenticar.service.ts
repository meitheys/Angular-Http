import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor() { }

  authenticate(nome, senha) {
    if (nome === "javainuse" && senha === "senha") {
      sessionStorage.setItem('nome', nome)
      return true;
    }else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('nome')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut(){
    sessionStorage.removeItem('nome')
  }
}
