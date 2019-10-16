import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastronomyComponent } from './gastronomy.component';

describe('GastronomyComponent', () => {
  let component: GastronomyComponent;
  let fixture: ComponentFixture<GastronomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastronomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastronomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
