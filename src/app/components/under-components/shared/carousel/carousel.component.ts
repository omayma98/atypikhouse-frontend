import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel',
  template :

  `
  <owl-carousel-o [options]="customOptions" class="col-12">

    <ng-container *ngFor="let slide of Slides ">

         <ng-template carouselSlide>

                <div class="slide d-flex align-items-center my-3">
                        <div class="card">
                        <a href="#" title="">
                            <div class="img-block">
                                <div class="overlay"></div>
                                <img src="{{slide.bgUrl}}" alt="" class="img-fluid">
                            </div>
                        </a>
                        <div class="card-body">
                        <h3>{{slide.title}}</h3>
                        <p class="location mb-3"> <i class="la la-map-marker"></i>{{slide.location}}</p>
                          <p class="pb-3" style="border-bottom: 5px solid whitesmoke;">
                          <span href="#" class="pull-left">{{slide.type}}</span>
                          <span href="#" class="pull-right">{{slide.prix}}</span>
                        </p>
                        </div>
                        <div class="card-footer card-footer d-flex align-items-center justify-content-between">
                            <a href="#" class="pull-left">
                                <i class="la la-heart-o mr-2"></i>Enregistrer
                            </a>
                            <a href="#" class="pull-right">
                              <span>Détails</span>
                            </a>
                        </div>
                        <a href="#" title="" class="ext-link"></a>
                    </div>
               </div>

          </ng-template>

    </ng-container>

   </owl-carousel-o>

   `
  ,
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() Slides: any;

  customOptions: OwlOptions = {
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

  constructor() { }

  ngOnInit(): void {
  }

}
