import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard/Auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { AuthService } from './auth-guard/auth.service';

const routes: Routes = [

  { path: 'index', component: IndexComponent, canActivate:[AuthService] },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-usuario', component: UsuarioComponent, canActivate:[AuthService]  },
  { path: 'cadastro-fornecedor', component: FornecedorComponent, canActivate:[AuthService] },
  { path: 'logout', component: LogoutComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
