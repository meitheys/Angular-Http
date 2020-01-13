import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'cadastr-usuario', component: UsuarioComponent},
  { path: 'cadastro-fornecedor', component: FornecedorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
