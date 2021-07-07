import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNeumoCalendarComponent } from './ng-neumo-calendar.component';

describe('NgNeumoCalendarComponent', () => {
  let component: NgNeumoCalendarComponent;
  let fixture: ComponentFixture<NgNeumoCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNeumoCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNeumoCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
