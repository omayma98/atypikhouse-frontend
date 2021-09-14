import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private issuer = {
    login: 'http://admin.atypik-house.com/api/login',
    register: 'http://admin.atypik-house.com/api/register'
  };

  constructor() { }

  // tslint:disable-next-line:typedef
  handleData(token){
    sessionStorage.setItem('access_token', token);
  }

  // tslint:disable-next-line:typedef
  getToken(){
    return sessionStorage.getItem('access_token');
  }

  // Verify the token
  // tslint:disable-next-line:typedef
  isValidToken(){
     const token = this.getToken();

     if (token){
      const payload = this.payload(token);
       if (payload){
         return  Object.values(this.issuer).indexOf(payload.iss) > -1;}
     } else {
        return false;
     }
  }

  // tslint:disable-next-line:typedef
  payload(token) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  // User state based on valid token
  // tslint:disable-next-line:typedef
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  // tslint:disable-next-line:typedef
  removeToken(){
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem("UserId");
    sessionStorage.removeItem("UserName");
    sessionStorage.removeItem("UserEmail");
    sessionStorage.removeItem("UserTel");
    sessionStorage.removeItem("UserAdress");
    sessionStorage.removeItem("UserRole");
    sessionStorage.removeItem("UserWantAdd");
    sessionStorage.removeItem("UserCanAdd");
  }

}
