import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsFavoritesComponent } from './destinations-favorites.component';
import { title } from 'process';

describe('DestinationsFavoritesComponent', () => {
  let component: DestinationsFavoritesComponent;
  let fixture: ComponentFixture<DestinationsFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationsFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationsFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
