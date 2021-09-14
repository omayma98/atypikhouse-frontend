import {Component, OnInit} from '@angular/core';
import {HabitatsService} from '../../../core/services/habitats/habitats.service';

@Component({
  selector: 'app-habitats',
  templateUrl: './habitats.component.html',
  styleUrls: ['./habitats.component.scss']
})
export class HabitatsComponent implements OnInit {

  type1: any;
  allHabitats: any;
  image: any;
  constructor(
    private habitatService: HabitatsService,
  ) { }

  ngOnInit(): void {
    this.habitatService.getAllHabitats().subscribe(
      data => {
        this.type1 = data;
        this.allHabitats = this.type1.habitats;
      });
  }

}
