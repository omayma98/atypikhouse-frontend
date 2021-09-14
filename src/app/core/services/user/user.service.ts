import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {User} from '../../models/user.model';
import {AuthService} from '../../auth/auth.service';
import {InfoEntreprise} from '../../models/info-entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  private  baseUrl: string = environment.apiURL + 'users';
  authentificatedUser: User;
  constructor(
    private http: HttpClient,
    private  authService: AuthService
  ) {
    this.authentificatedUser = authService.getAuthentificatedUser();
  }


  updatMyProfile(user: User): Observable<any>{
    return this.http.post(this.baseUrl + '/updateProfil/' + this.authentificatedUser.id, user );
  }

  getMyHabitats(): Observable<any> {
    return this.http.get(this.baseUrl + '/usersHabitats');
  }

  askAuthorizationToAddHabit(infoEntreprise: InfoEntreprise): Observable<any> {
    return this.http.post(this.baseUrl + '/askAuthorizationToAddHabitat', infoEntreprise);
  }

  getMyHabitatDetails(habitatId: number): Observable<any> {
    return this.http.get(this.baseUrl + '/getMyHabitatDetails/' + habitatId);
  }
  // getMyRerservation(){}
  // getMyComments()

}
