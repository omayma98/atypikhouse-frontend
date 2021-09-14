import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../../../core/services/token.service';
import {AuthService} from '../../../../core/auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  isUserAuthenticiatedSub: Subscription;
  constructor( public router: Router,
               public authService: AuthService, ) { }

  ngOnInit(): void {
    this.isUserAuthenticiatedSub = this.authService.isAuthentificated.subscribe(
      (data) => this.isLoggedIn = data
    );
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.isUserAuthenticiatedSub.unsubscribe();
  }
}
