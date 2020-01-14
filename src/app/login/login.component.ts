import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AutenticarService } from '../autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  nome = '';
  senha = '';
  invalidLogin = false;

  constructor(private router: Router, private loginService: AutenticarService) {}

  ngOnInit() {}

  checkLogin(){
    if(this.loginService.authenticate(this.nome, this.senha)
    ){
      this.router.navigate(['/cadastro-fornecedor'])
      this.invalidLogin = false;
    }else 
      this.invalidLogin = true;
  }
}
