import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMapComponent } from './car-map.component';

describe('CarMapComponent', () => {
  let component: CarMapComponent;
  let fixture: ComponentFixture<CarMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
