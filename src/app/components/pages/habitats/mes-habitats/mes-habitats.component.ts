import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../core/services/user/user.service';
import {environment} from '../../../../../environments/environment';
import {Habitat} from '../../../../core/models/habitats.model';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-mes-habitats',
  templateUrl: './mes-habitats.component.html',
  styleUrls: ['./mes-habitats.component.scss']
})
export class MesHabitatsComponent implements OnInit {
  allHabitats: Habitat[] ;
  message: string;
  errorNotification: any;
  dtOptions: DataTables.Settings =  {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.allHabitats =  [];
    this.dtOptions =  {
      pagingType: 'full_numbers',
      language: environment.dataTableLanguage
    };

    this.userService.getMyHabitats().subscribe(
      (responseData) => {
        if ( responseData.serverMessage ){
          this.message = responseData.serverMessage;
        }
        if ( responseData.habitats ){
          this.allHabitats =  responseData.habitats;
          this.dtTrigger.next();
        }
      },

      (errorResponse) => {
          if ( errorResponse.error instanceof  ErrorEvent ){
            this.errorNotification = 'Une erreur est survenu. Veuillez recharger la page';
            console.error(errorResponse);
          } else {
            if (!environment.production ){
              console.log(errorResponse);
            } else {
              // @TODO send error to server.
            }
          }
      }
    );
  }

}
