import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import {environment} from '../../../../../environments/environment';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  successNotification: any;
  errorNotification: any;
  serverValidationErrors: any;
  loginForm: FormGroup;
  modal: any;
  isVisible = false;
  isLoading = false;

  constructor(
    public router: Router,
    public authService: AuthService,

  ){ }

  ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl('', [ Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required)
      });
   }

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe(
      response => {
        this.isLoading = true;
        this.authService.storeToken(response.access_token);
        this.authService.saveAuthentificatedUser(response.user);
        this.successNotification = response.success;
        setTimeout(
          () => {
            this.isLoading = false;
            this.authService.isAuthentificated.next(true);
            this.router.navigate(['/habitats']);
          },
          1000
        );
      },
      errorResponse => {
        if (errorResponse.error instanceof ErrorEvent){
          this.errorNotification = 'Une erreur est survenue lors de l\'envoie du formulaire. Veuillez ressayer!';
          console.log(errorResponse.error.message);
        } else {
          if (errorResponse.error?.validationErrors){
            this.serverValidationErrors = errorResponse.error?.validationErrors;
          } else if (errorResponse.error?.serverError){
            this.errorNotification =  errorResponse.error.serverError;
          } else {
            if (!environment.production){
              console.log(errorResponse.error);
            } else {
              console.log('Internal serveur erreur');
              // @TODO send error to server.
            }
          }
        }
      }
    );
  }

}

