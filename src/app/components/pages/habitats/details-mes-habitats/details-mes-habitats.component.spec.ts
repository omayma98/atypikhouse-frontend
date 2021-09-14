import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMesHabitatsComponent } from './details-mes-habitats.component';

describe('DetailsMesHabitatsComponent', () => {
  let component: DetailsMesHabitatsComponent;
  let fixture: ComponentFixture<DetailsMesHabitatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMesHabitatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMesHabitatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
