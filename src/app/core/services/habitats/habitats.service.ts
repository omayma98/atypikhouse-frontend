import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Habitat} from '../../models/habitats.model';
import {Observable} from 'rxjs';
import {InfoEntreprise} from '../../models/info-entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class HabitatsService {
  protected  baseUrl: string = environment.apiURL;

  addUrl = this.baseUrl + 'habitats/add';
  getAllHabitatUrl = this.baseUrl + 'habitats/getAll';
  habitatDetailUrl = this.baseUrl +  'habitats/getDetails/';
  askAddUrl = this.baseUrl + 'users/askAuthorizationToAddHabitat';
  getUserReservationsUrl = this.baseUrl + 'habitats/reservations/allUsersReservations';
  deleteHabitatImageUrl =  this.baseUrl + 'habitats/vues/delete/';
  updateHabitatUrl =  this.baseUrl + 'habitats/update/';


  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  addNewHabitat(habitat: Habitat): Observable<any> {
    return this.http.post<Habitat>(this.addUrl, habitat);
  }

  getAllHabitats(): Observable<any> {
    return this.http.get(this.getAllHabitatUrl);
  }

  getHabitatDetails(habitatId): Observable<any> {
    return this.http.get(this.habitatDetailUrl + habitatId);
  }

  // Retourner l(historique de réservation de l'utilisateur connecté
  getUserReservations(): Observable<any> {
    return this.http.get(this.getUserReservationsUrl);
  }

  deleteHabitatImage(vueId: number, habitatId: number): Observable<any> {
    return this.http.get(this.deleteHabitatImageUrl + vueId + '-' + habitatId);
  }

  updateHabitat(habitatId: number, habitat: Habitat): Observable<any>{
    return this.http.post(this.updateHabitatUrl + habitatId, habitat);
  }
}
