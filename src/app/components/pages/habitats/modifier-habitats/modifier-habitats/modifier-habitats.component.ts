import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HabitatsTypesService} from '../../../../../core/services/habitats/habitats-types.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../../../core/auth/auth.service';
import {HabitatsService} from '../../../../../core/services/habitats/habitats.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../../../environments/environment';
import {Habitat, Vue} from '../../../../../core/models/habitats.model';
import {UserService} from '../../../../../core/services/user/user.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-modifier-habitats',
  templateUrl: './modifier-habitats.component.html',
  styleUrls: ['./modifier-habitats.component.scss']
})
export class ModifierHabitatsComponent implements OnInit {

  errorNotificationImgSuppr: string;
  successNotificationImgSuppr: string;
  habitatForm: FormGroup;
  type1: any;
  type2: any;
  files: string  []  =  [];
  formData: any;
  errorNotification: string;
  successNotification: string;
  serverValidationErrors: any;
  HabitatToModifySub: Subject<Habitat> =  new Subject<Habitat>();
  vueHabitatSub: Subject<Vue[]> = new Subject<Vue[]>();
  habitatToModify: Habitat;
  habitatToModifyImg: Vue[];
  habitatToModifyId: number;
  imageBaseUrl: string = environment.backendAssetUrl;

  constructor(
    private habitatsTypesApi: HabitatsTypesService,
    private habitatService: HabitatsService,
    private activatedRoute: ActivatedRoute,
    private userServices: UserService,
    private cdr: ChangeDetectorRef,
  ) {}




  onFileChanged(event): void {
    for(let i =  0; i <  event.target.files.length; i++){
      this.files.push(event.target.files[i]);
    }
  }

  ngOnInit(): void {

    this.HabitatToModifySub.subscribe(
      habitat => this.habitatToModify = habitat
    );
    this.vueHabitatSub.subscribe(
      vues => this.habitatToModifyImg = vues
    );

    this.activatedRoute.paramMap.subscribe(
      allParam => {
        this.habitatToModifyId = +allParam.get('id');
      });

    // getting habitats types
    this.habitatsTypesApi.getHabitatsTypes().subscribe(
      data => {
        this.type1 = data;
        this.type2 = this.type1.typeHabitats;
    });

    // getting habitat to modify
    this.userServices.getMyHabitatDetails(this.habitatToModifyId).subscribe(
      responseData => {
        this.HabitatToModifySub.next(responseData.habitat);
        this.vueHabitatSub.next(responseData.habitat.vues);
        this.initializeHabitatForm(this.habitatToModify);
      },
      (errorResponse) => {
        if (errorResponse.error?.serverError){
          this.errorNotification = 'Habitat inexistant !';
        } else {
          this.errorNotification = 'Une erreur est survenue ! Veuillez reessayer';
          console.log(errorResponse.error);
        }
      }
    );
    // tslint:disable-next-line:typedef
  }

  initializeHabitatForm(habitat: Habitat): void {
    // initializing habitatForm
    this.habitatForm = new FormGroup({
      title: new FormControl(this.habitatToModify?.title, Validators.required),
      description: new FormControl(this.habitatToModify?.description, Validators.required),
      nombreChambre: new FormControl(this.habitatToModify?.nombreChambre, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
      ]),
      prixParNuit: new FormControl(this.habitatToModify?.prixParNuit, Validators.required),
      nombreLit: new FormControl(this.habitatToModify?.nombreLit, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1)
      ]),
      adresse: new FormControl(this.habitatToModify?.adresse, Validators.required),
      hasTelevision: new FormControl(this.habitatToModify?.hasTelevision, Validators.required),
      hasChauffage: new FormControl(this.habitatToModify?.hasChauffage, Validators.required),
      hasInternet: new FormControl(this.habitatToModify?.hasInternet, Validators.required),
      hasClimatiseur: new FormControl(this.habitatToModify?.hasClimatiseur, Validators.required),
      typeHabitat: new FormControl(this.habitatToModify?.typeHabitat, Validators.required),
      vues: new FormControl([])
    });
  }

  onSubmitApply(): void{
    this.formData =  new FormData();

    console.log(this.habitatForm.value);
    for (let i =  0; i <  this.files.length; i++)  {
      this.formData.append('vues[]',  this.files[i]);
    }

    this.formData.append('title', this.habitatForm.get('title').value);
    this.formData.append('description', this.habitatForm.get('description').value);
    this.formData.append('nombreChambre', this.habitatForm.get('nombreChambre').value);
    this.formData.append('prixParNuit', this.habitatForm.get('prixParNuit').value);
    this.formData.append('nombreLit', this.habitatForm.get('nombreLit').value);
    this.formData.append('adresse', this.habitatForm.get('adresse').value);
    this.formData.append('hasTelevision', this.habitatForm.get('hasTelevision').value);
    this.formData.append('hasChauffage', this.habitatForm.get('hasChauffage').value);
    this.formData.append('hasInternet', this.habitatForm.get('hasInternet').value);
    this.formData.append('hasClimatiseur', this.habitatForm.get('hasClimatiseur').value);
    this.formData.append('typeHabitat', this.habitatForm.get('typeHabitat').value as number);



    this.habitatService.updateHabitat(this.habitatToModify.id, this.formData).subscribe(
      responseData => {
        this.successNotification = responseData.success;
        this.HabitatToModifySub.next(responseData.habitat);
        console.log(responseData);
        this.vueHabitatSub.next(responseData.habitat.vues);
        // this.cdr.detectChanges();
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
    );
  }

  deleteHabitatImage(vueId: number): void{
    this.habitatService.deleteHabitatImage(vueId, this.habitatToModifyId).subscribe(
      responseData => {
        this.vueHabitatSub.next(responseData.vues);
        this.successNotificationImgSuppr = responseData.success;
      },

      errorResponse => {
        if (!environment.production){
          this.errorNotification =  errorResponse.error.message;
          console.log(errorResponse.error);
        } else {
          console.log('Internal serveur erreur');
          // @TODO send error to server.
        }
        if (errorResponse.error.serverError){
          this.errorNotificationImgSuppr =  errorResponse.error.serverError;
        }
      }

    );
  }

  resetNotification(notifaction: string): void{
    switch (notifaction) {
      case 'successNotification' : {
        this.successNotification = '';
        break;
      }

      case 'errorNotification' : {
        this.errorNotification = '';
        break;
      }

      case 'successNotificationImgSuppr' : {
        this.successNotificationImgSuppr = '';
        break;
      }

      case 'errorNotificationImgSuppr' : {
        this.errorNotificationImgSuppr = '';
        break;
      }
    }
  }
}
