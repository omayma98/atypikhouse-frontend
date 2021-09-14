import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export  class  AuthGuard implements  CanActivate, OnDestroy{
  isUserAuthenticiatedSub: Subscription;
  constructor(private  authService: AuthService, private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
  boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
      let isAuth: boolean;
      this.isUserAuthenticiatedSub = this.authService.isAuthentificated.subscribe(
        (data) => isAuth = data
      );
      if ( isAuth ){
        return  true;
      }
      return this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
    this.isUserAuthenticiatedSub.unsubscribe();
  }
}
