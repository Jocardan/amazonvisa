import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, public jwtHelper: JwtHelperService) {}

  canActivate() {
    const token = localStorage.getItem('TOKEN');

    if (!token || this.jwtHelper.isTokenExpired(token)) {
      if (this.router.url.includes('signin')) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
    return false;
  }
}
