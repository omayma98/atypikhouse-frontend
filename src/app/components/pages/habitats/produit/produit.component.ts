import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent, OwlOptions} from 'ngx-owl-carousel-o';
import {ActivatedRoute} from '@angular/router';
import {HabitatsService} from '../../../../core/services/habitats/habitats.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit, OnDestroy {
  isSignedIn: boolean;
  images: any;
  isUserAuthenticiatedSub: Subscription;

  constructor(public route: ActivatedRoute,
              private authservice: AuthService,
              public habitatService: HabitatsService) {
          this.route.params.subscribe(
            params => this.habitatid = params.id
          );
  }
  habitatid: any;
  isLoggedIn: boolean;
  customOptionsDestinations: OwlOptions = {
    loop: true,
    margin: 30,
    autoplay: false,
    stagePadding: 5,
    URLhashListener: true,
    dots: false,
    // tslint:disable-next-line:max-line-length
    navText: ['<i class=\'fas fa-arrow-alt-circle-left text-primary\'></i>', '<i class=\'fas fa-arrow-alt-circle-right text-primary\'></i>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      940: {
        items: 1,
        nav: true
      }
    }
  };

  @ViewChild('owlMac') owlMac: CarouselComponent;
  @ViewChild('owlCat') owlCat: CarouselComponent;

  categoriesOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    center: true,
    margin: 10,
    dotsSpeed: 300,
    responsive: {
      0: {
        items: 4,
        loop: true,
      },
      400: {
        items: 4,
        loop: true,
      },
      740: {
        items: 4,
        loop: true,
      },
      940: {
        items: 4,
        loop: true,
      }
    }
  };

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dragEndSpeed: 450,
    items: 1,
    // responsive: {
    //   0: {
    //     items: 1,
    //     loop: true,
    //   },
    //   400: {
    //     items: 1,
    //     loop: true,
    //   },
    //   740: {
    //     items: 1,
    //     loop: true,
    //   },
    //   940: {
    //     items: 1,
    //     loop: true,
    //   }
    // }
  };


  destinationsFavorites = [
    {
      bgUrl: '/assets/images/acquitaine.png'
    },
    {
      bgUrl: '/assets/images/bretagne.png'
    },
    {
      bgUrl: '/assets/images/limousin.png'
    },
    {
      bgUrl: '/assets/images/acquitaine.png'
    }
  ];

  type1: any;
  Slides2: any;

  // tslint:disable-next-line:typedef
  title: any;
  description: any;
  nombreChambre: any;
  prixParNuit: any;
  nombreLit: any;
  adresse: any;
  hasTelevision: any;
  hasChauffage: any;
  hasInternet: any;
  hasClimatiseur: any;
  typeHabitat: any;
  vues: any;

  // tslint:disable-next-line:typedef
  slideTo(category: string) {
    this.owlMac.moveByDot(category);
  }
  changeSlide($event) {
    if (this.owlCat) {
      // this.category$.next($event.slides[0].id);
      this.owlCat.moveByDot(this.owlCat.dotsData.dots[$event.startPosition].id)
      ;
    }
  }

  ngOnInit(): void {
    this.isUserAuthenticiatedSub = this.authservice.isLoggedIn().subscribe(
      (data) => this.isLoggedIn = data
    );
    this.habitatService.getHabitatDetails(this.habitatid).subscribe(
      data => {
        this.type1 = data;
        this.Slides2 = this.type1.habitat;
        this.images = this.type1.habitat.vues;
        this.hasTelevision = this.Slides2.hasTelevision;
        this.hasChauffage = this.Slides2.hasChauffage;
        this.hasInternet = this.Slides2.hasInternet;
        this.hasClimatiseur = this.Slides2.hasClimatiseur;
      }
    );
  }

  ngOnDestroy(): void {
    this.isUserAuthenticiatedSub.unsubscribe();
  }
}
