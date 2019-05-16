import { TestBed } from '@angular/core/testing';

import { DateJsonService } from './date-json.service';

describe('DateJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateJsonService = TestBed.get(DateJsonService);
    expect(service).toBeTruthy();
  });
});
