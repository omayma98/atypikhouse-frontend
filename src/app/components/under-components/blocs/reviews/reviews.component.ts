import { Component, OnInit, HostBinding } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    autoplay: true,
    stagePadding: 5,
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 2
     },
      940: {
       dots : true,
       items: 3
     }
    },
  };


  constructor() { }

  ngOnInit(): void {

  }

}


