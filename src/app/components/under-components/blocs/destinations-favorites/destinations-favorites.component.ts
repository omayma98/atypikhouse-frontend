import { HtmlParser } from '@angular/compiler';
import { Component, OnInit, HostBinding } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-destinations-favorites',
  template:
`

  <section class="destinations-fav d-flex align-items-center z-index-1 section-padding">
    <div class="container">
    <app-section-title sectionTitle="{{ sectionTitle }}" sectionDescription="{{ sectionDescription }}"></app-section-title>
        <div class="row flex-column">
            <div class="col-12">

            <owl-carousel-o [options]="customOptionsDestinations" class="destinations-fav-owl-carousel col-12">

                <ng-container *ngFor="let slide of destinationsFavorites">

                        <ng-template carouselSlide>
                        <div class="slide d-flex align-items-center my-3">
                            <div class="b-0 card shadow-sm w-100">
                                <div class="bg-img" [ngStyle]="{'background-image': 'url(' + slide.bgUrl + ')'}" [style.padding-top]="'50%'" [style.width]="'100%'">
                                    <!-- Illustration -->
                                </div>
                                <div class="card-body b-0 text-center">
                                    <h3><a href="#" class="text-primary">{{slide.title}}</a></h3>
                                    <p><span>{{slide.nb}}</span>Hébergements</p>
                                </div>
                            </div>
                        </div>
                        </ng-template>

                  </ng-container>

            </owl-carousel-o>

        </div>
      </div>
    </div>

</section>  `


  ,
  styleUrls: ['./destinations-favorites.component.scss']
})
export class DestinationsFavoritesComponent implements OnInit {

  sectionTitle = 'Nos destinations favorites';
  sectionDescription = 'Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi perso.';


  customOptionsDestinations: OwlOptions = {
    loop: true,
    margin: 30,
    autoplay: false,
    stagePadding: 5,
    dots: false,
    // tslint:disable-next-line:max-line-length
    navText: ['<i class=\'fas fa-arrow-alt-circle-left text-primary\'></i>', '<i class=\'fas fa-arrow-alt-circle-right text-primary\'></i>'],
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 2
     },
      940: {
       items: 3,
       nav: true
     }
    }
  };



 destinationsFavorites = [
    {

      bgUrl: '/assets/images/acquitaine.png',
      nb: '45',
      title: 'Acquitaine',

    },
    {

      bgUrl: '/assets/images/bretagne.png',
      nb: '136',
      title: 'Bretagne',

    },

    {

      bgUrl: '/assets/images/limousin.png',
      nb: '35',
      title: 'Limousin',

    },

    {

      bgUrl: '/assets/images/acquitaine.png',
      nb: '24',
      title: 'Loire',

    }
  ];




  constructor() { }


  ngOnInit(): void {
  }

}
