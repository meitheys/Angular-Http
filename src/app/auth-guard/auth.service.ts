import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticarService } from '../autenticar.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate {
  
  constructor(private router: Router,
    private authService: AutenticarService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }
}