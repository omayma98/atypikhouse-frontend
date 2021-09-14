import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HabitatsService} from '../../../../core/services/habitats/habitats.service';
import {User} from '../../../../core/models/user.model';
import {UserService} from '../../../../core/services/user/user.service';
import {environment} from '../../../../../environments/environment';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.scss']
})
export class EspaceClientComponent implements OnInit {
  userAuthentificated: User ;
  successNotification: any;
  userWantToAddHabitat = false;
  userWantToUpdateProfile = true;
  errorNotification: any;
  serverValidationErrors: any;
  askAddForm: FormGroup;
  profilForm: FormGroup;
  data: any;
  formData: any;
  success: any;

  historic: any;
  historicData: any;
  errors2: any;
  isPaid: number;
  private detailHabitat: any;
  private i: any;
  private submitted: boolean;

  constructor(public authService: AuthService,
              public habitatService: HabitatsService,
              public fb: FormBuilder,
              private userService: UserService
  ) { }

  ngOnInit(): void {
    // fetching users informations
      const user: User = this.authService.getAuthentificatedUser();
      if (user.id ){
        this.userAuthentificated = user;
      }

      this.askAddForm = new FormGroup({
      nomEntreprise: new FormControl(null, Validators.required),
      siren: new FormControl('', [Validators.required, Validators.minLength(9)])
    });

      this.profilForm =  this.fb.group({
        name: [this.userAuthentificated.name],
        email: [this.userAuthentificated.email, Validators.email],
        adresse: [this.userAuthentificated.adresse],
        telephone: [this.userAuthentificated.telephone]

      });
  }

  wantToAddHabitat(): void{
    this.userWantToAddHabitat = !this.userWantToAddHabitat;
  }

  wantToUpdateProfile(): void{
    this.userWantToUpdateProfile =  !this.userWantToUpdateProfile;
  }

  onSubmitApply(): void{
    this.userService.askAuthorizationToAddHabit(this.askAddForm.value).subscribe(
      responseData => {
        this.successNotification = responseData.success;
        this.userAuthentificated.wantToAddHabitat = true;
        this.authService.saveAuthentificatedUser(this.userAuthentificated);
      },
      errorResponse => {
        this.manageError(errorResponse);
      },
      () => {
        this.askAddForm.reset();
      }
    );
  }

  onSubmitProfilForm(): void{
    this.userService.updatMyProfile(this.profilForm.value).subscribe(
      (responseData) => {
        this.successNotification = responseData.success;
        this.userAuthentificated = responseData.user;
        this.authService.saveAuthentificatedUser( this.userAuthentificated );
      },
      errorResponse => {
        this.manageError(errorResponse);
      }
    );
  }

  manageError(errorResponse: HttpErrorResponse): void{
    if (errorResponse.error instanceof ErrorEvent){
      this.errorNotification = 'Une erreur est survenue. Veuillez ressayer!';
      console.log(errorResponse.error.message);
    } else {
      if (errorResponse.error.validationErrors){
        this.serverValidationErrors = errorResponse.error.validationErrors;
      } else if (errorResponse.error.serverError){
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

  updateSuccessNotifcation(): void {
    this.successNotification = '';
  }
}

