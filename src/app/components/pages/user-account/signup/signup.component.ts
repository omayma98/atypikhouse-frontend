import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PasswordValidatorsService } from '../../../../core/services/password-validators.service'
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errorNotification: string;
  successNotification: string;
  serverValidationsErrors: any;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      adresse: new FormControl(null, Validators.required),
      telephone: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      password_confirmation: new FormControl(null, Validators.required)
    }
    );
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.authService.register(this.registerForm.value).subscribe(
      successResponse => {
        this.successNotification = successResponse.success;
        setTimeout(
          () => this.router.navigate(['/login']),
          2000
        );
      },
      errorResponse => {
        if (errorResponse.error instanceof  ErrorEvent){
          this.errorNotification = 'Une erreur est survenue lors de l\'envoie du formulaire. Veuillez ressayer!';
          console.log(errorResponse.error.message);
        } else{
          if (errorResponse.error.validationErrors){
            this.serverValidationsErrors = errorResponse.error.validationErrors;
          } else if ( errorResponse.error.serverError ){
            this.errorNotification =  errorResponse.error.serverError;
          } else  {
            if (!environment.production){
              console.log(errorResponse.error);
            } else {
              // @TODO send error to server.
              console.log('Internal serveur erreur');
            }
          }
        }
      },
    );
  }

}
