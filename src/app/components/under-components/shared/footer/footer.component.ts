import { Component, OnInit, Input } from '@angular/core';


// @ts-ignore
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  color = 'lightgrey';
  constructor() { }

  ngOnInit(): void {
  }

}
