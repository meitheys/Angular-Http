import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { FormsModule }   from '@angular/forms';
import { Usuario } from './usuario/usuario';
import { HttpClientModule } from '@angular/common/http';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { AuthGuard } from './auth-guard/Auth.guard';
import { IndexComponent } from './index/index.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    FornecedorComponent,
    HeaderComponent,
    LoginComponent,
    PageNotFoundComponent,
    AuthGuardComponent,
    IndexComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
