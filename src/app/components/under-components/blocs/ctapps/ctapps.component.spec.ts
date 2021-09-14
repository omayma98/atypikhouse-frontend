import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtappsComponent } from './ctapps.component';

describe('CtappsComponent', () => {
  let component: CtappsComponent;
  let fixture: ComponentFixture<CtappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtappsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
