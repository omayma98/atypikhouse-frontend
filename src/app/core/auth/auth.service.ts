import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {User} from '../models/user.model';
import {HttpClient, JsonpClientBackend} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {sequenceEqual} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = environment.apiURL;
  isAuthentificated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
  }

  register(user: User): Observable<any>{
    return this.http.post(this.baseUrl + 'register', user);
  }

  login(user: User): Observable<any> {
    return this.http.post(this.baseUrl + 'login', user);
  }

  storeToken(token: string): void{
    localStorage.setItem('access_token', token);
  }

  isLoggedIn(): Observable<boolean> {
    const token: string = localStorage.getItem('access_token');
    if (token.trim().length > 0) {
     this.isAuthentificated.next(true);
     return this.isAuthentificated;
    } else {
      this.isAuthentificated.next(true);
      return this.isAuthentificated;
    }
  }

  saveAuthentificatedUser(user: User): void{
    localStorage.setItem('user',
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        adresse: user.adresse,
        telephone: user.telephone,
        canAddHabitat: user.canAddHabitat,
        wantToAddHabitat: user.wantToAddHabitat
      })
    );
  }

  getAuthentificatedUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(): string {
    return localStorage.getItem('access_token');
  }

  logout(): any{
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.isAuthentificated.next(false);
    this.router.navigate(['/login']);
  }
}
