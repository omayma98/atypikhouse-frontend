import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { HabitatsTypesService } from '../../../../core/services/habitats/habitats-types.service';
import {HabitatsService} from '../../../../core/services/habitats/habitats.service';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-deposer-annonce',
  templateUrl: './deposer-annonce.component.html',
  styleUrls: ['./deposer-annonce.component.scss']
})

export class DeposerAnnonceComponent implements OnInit {

  // tslint:disable-next-line:typedef
  constructor(
    private habitatsTypesApi: HabitatsTypesService,
    public router: Router,
    public authService: AuthService,
    public habitatService: HabitatsService,
  ) {}

  deposerAnnonceForm: FormGroup;
  type1: any;
  type2: any;
  files: string  []  =  [];
  formData: any;
  errorNotification: string;
  successNotification: string;
  serverValidationErrors: any;

  onFileChanged(event): void {
    console.log(event.target.files);
    for (let i =  0; i <  event.target.files.length; i++)  {
      this.files.push(event.target.files[i]);
    }
  }

  ngOnInit(): void {

    this.habitatsTypesApi.getHabitatsTypes().subscribe(
      data => {
        this.type1 = data;
        this.type2 = this.type1.typeHabitats;
      });

    // tslint:disable-next-line:typedef
    this.deposerAnnonceForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      nombreChambre: new FormControl(1, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
      ]),
      prixParNuit: new FormControl(null, Validators.required),
      nombreLit: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1)
      ]),
      adresse: new FormControl(null, Validators.required),
      hasTelevision: new FormControl(null, Validators.required),
      hasChauffage: new FormControl(null, Validators.required),
      hasInternet: new FormControl(null, Validators.required),
      hasClimatiseur: new FormControl(null, Validators.required),
      typeHabitat: new FormControl(null, Validators.required),
      vues: new FormControl([], [Validators.required, Validators.min(1)])
    });

    // tslint:disable-next-line:typedef
  }

  onSubmitApply(): void{
    this.formData =  new FormData();

    for (let i =  0; i <  this.files.length; i++)  {
      this.formData.append('vues[]',  this.files[i]);
    }

    this.formData.append('title', this.deposerAnnonceForm.get('title').value);
    this.formData.append('description', this.deposerAnnonceForm.get('description').value);
    this.formData.append('nombreChambre', this.deposerAnnonceForm.get('nombreChambre').value);
    this.formData.append('prixParNuit', this.deposerAnnonceForm.get('prixParNuit').value);
    this.formData.append('nombreLit', this.deposerAnnonceForm.get('nombreLit').value);
    this.formData.append('adresse', this.deposerAnnonceForm.get('adresse').value);
    this.formData.append('hasTelevision', this.deposerAnnonceForm.get('hasTelevision').value);
    this.formData.append('hasChauffage', this.deposerAnnonceForm.get('hasChauffage').value);
    this.formData.append('hasInternet', this.deposerAnnonceForm.get('hasInternet').value);
    this.formData.append('hasClimatiseur', this.deposerAnnonceForm.get('hasClimatiseur').value);
    this.formData.append('typeHabitat', this.deposerAnnonceForm.get('typeHabitat').value);
    this.formData.append('_method', 'POST');



    this.habitatService.addNewHabitat(this.formData).subscribe(
      responseData => {
        this.successNotification = responseData.success;
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
      },
      () => {
        this.deposerAnnonceForm.reset();
      }
    );
  }

}
