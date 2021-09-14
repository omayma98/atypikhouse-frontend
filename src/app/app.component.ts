import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from './core/services/token.service';
import { AuthService } from './core/auth/auth.service';
import {environment} from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'AtypikHouse';
  isSignedIn: boolean;
  disconnectOnWindowsClose: boolean = environment.disconnectOnWindowsClose;
  constructor(
    private authService: AuthService,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(
      (userState) => this.isSignedIn = userState
    );

    if (!this.isSignedIn){
      this.router.navigate(['/login']);
    }
  }



  @HostListener('window:beforeunload', ['$event'])
    logout(event): void{
      if (this.disconnectOnWindowsClose){
        this.authService.logout();
      }
    }

}
