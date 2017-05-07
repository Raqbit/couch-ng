import { CanLoad, Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Injectable()
export class HomeGuardService implements CanLoad, CanActivate {

  constructor(private router: Router, private authService: AuthService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    // If this guard is called from /login, not just /, only show the page if *not* authenticated.
    if (route.url[0].path === 'login') {
      if (this.authService.authenticated) {
        this.router.navigate(['/']);
        return false;
      } else {
        return true;
      }
    }
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    // If this guard is called from just /, only show login if not authenticated
    if (route.path === '') {
      if (this.authService.authenticated) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
