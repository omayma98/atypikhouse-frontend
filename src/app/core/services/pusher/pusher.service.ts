import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import Pusher from 'pusher-js';
import {AuthService} from '../../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class PusherService {
 pusher: any;
 channel: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.pusher =  new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
    });

    this.channel =  this.pusher.subscribe('user.' + this.authService.getAuthentificatedUser().id);
  }
}
