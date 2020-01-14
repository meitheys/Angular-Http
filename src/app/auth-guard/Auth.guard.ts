import { Injectable } from '@angular/core';      
import { AuthService } from '../auth-guard/auth.service'
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticarService } from '../autenticar.service';

@Injectable({      
   providedIn: 'root'      
})      
export class AuthGuard implements CanActivate {      

   constructor(
      private authService: AutenticarService,
      private router: Router
   ){}

   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot) {
  
      if(this.authService.isUserLoggedIn()){
         return true;
      }
      
      
  
      this.router.navigate(['/login'])
      return false;
    }
}    