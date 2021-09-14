import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierHabitatsComponent } from './modifier-habitats.component';

describe('ModifierHabitatsComponent', () => {
  let component: ModifierHabitatsComponent;
  let fixture: ComponentFixture<ModifierHabitatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierHabitatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierHabitatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
