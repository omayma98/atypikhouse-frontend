import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

export class Reservation{
  nbrOccupant: number;
  dateArrivee: any;
  dateDepart: any;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  protected  baseUrl: string = environment.apiURL + 'habitats/reservations/';
  constructor(private http: HttpClient) { }

  addReservation(reservation: Reservation, habitatId: number): Observable<any> {
    return this.http.post(this.baseUrl + 'add/' + habitatId, reservation);
  }

  getAllMyRerservation(): Observable<any>{
    return this.http.get(this.baseUrl + 'allUsersReservations');
  }

  getReservationDetails(idReservation: number): Observable<any>{
    return this.http.get(this.baseUrl + 'details/' + idReservation);
  }

  autoCancelReservation(idReservation: number): Observable<any>{
    return this.http.get(this.baseUrl + 'autoCancel/' + idReservation);
  }

  makePayement(idReservation: number): Observable<any>{
    return this.http.get(this.baseUrl + 'makePayement/' + idReservation);
  }


}


