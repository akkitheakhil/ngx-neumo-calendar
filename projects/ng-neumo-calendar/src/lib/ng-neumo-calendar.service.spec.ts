import { TestBed } from '@angular/core/testing';

import { NgNeumoCalendarService } from './ng-neumo-calendar.service';

describe('NgNeumoCalendarService', () => {
  let service: NgNeumoCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgNeumoCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
