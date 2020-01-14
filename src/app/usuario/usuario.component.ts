import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  submitted = false;

  usuarios: Usuario[];

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarioList().subscribe(data => {this.usuarios = data;}, error => alert("Error"))
  }

  novoUsuario(): void{
    this.submitted = false;
    this.usuario = new Usuario();
  }

  save(){
    this.usuarioService.createUsuario(this.usuario).subscribe(data => alert("Got Right"), error => alert("Error"));
    this.usuario = new Usuario();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  deleteUsuario(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe(data => { console.log(data), error => console.log(error); })
  }
  


}
