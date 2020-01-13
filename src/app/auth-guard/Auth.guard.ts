import { Injectable } from '@angular/core';      
import { AuthService } from '../auth-guard/auth.service'
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({      
   providedIn: 'root'      
})      
export class AuthGuard implements CanActivate {      

   constructor(
      private authService: AuthService,
      private router: Router
   ){}

   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | boolean {
  
      if(this.authService.LoggedUser()){
      return true;
      }
  
      this.router.navigate(['/cadastro-fornecedor']);
  
      return false;
    }
}    