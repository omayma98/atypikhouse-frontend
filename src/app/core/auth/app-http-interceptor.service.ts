import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppHttpInterceptorService implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    let requestCloned: HttpRequest<any>;
    if (token?.trim().length > 0){
      requestCloned = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });

      return next.handle(requestCloned);
    } else {
      return next.handle(req);
    }

  }
}
