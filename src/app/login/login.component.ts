import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
import { AuthService } from '../auth-guard/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  nome: String;
  senha: String;
  errorMessage = 'Usuário e/ou Senha inválidos/nulos!';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {   }

  ngOnInit() {}

  handleLogin() {
    this.authenticationService.authService(this.nome, this.senha).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/index']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }
  

}
