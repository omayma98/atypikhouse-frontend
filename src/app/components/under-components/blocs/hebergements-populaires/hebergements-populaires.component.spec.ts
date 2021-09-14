import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementsPopulairesComponent } from './hebergements-populaires.component';

describe('HebergementsPopulairesComponent', () => {
  let component: HebergementsPopulairesComponent;
  let fixture: ComponentFixture<HebergementsPopulairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebergementsPopulairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HebergementsPopulairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
