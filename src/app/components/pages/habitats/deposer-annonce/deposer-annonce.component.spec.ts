import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerAnnonceComponent } from './deposer-annonce.component';

describe('DeposerAnnonceComponent', () => {
  let component: DeposerAnnonceComponent;
  let fixture: ComponentFixture<DeposerAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeposerAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposerAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
