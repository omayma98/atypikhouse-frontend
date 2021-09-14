import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Habitat} from '../../../../core/models/habitats.model';
import {HabitatsService} from '../../../../core/services/habitats/habitats.service';
import {UserService} from '../../../../core/services/user/user.service';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-details-mes-habitats',
  templateUrl: './details-mes-habitats.component.html',
  styleUrls: ['./details-mes-habitats.component.scss']
})
export class DetailsMesHabitatsComponent implements OnInit {
  habitatId: any ;
  habitatDetails: Habitat;
  errorNotification: string;
  imageBaseUrl: string = environment.backendAssetUrl;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.habitatId = params.get('id')
    );

    this.userService.getMyHabitatDetails(this.habitatId).subscribe(
      (responseData) => {
        this.habitatDetails = responseData.habitat;
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
  }

}
