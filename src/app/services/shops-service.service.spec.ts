import { TestBed } from '@angular/core/testing';

import { ShopsServiceService } from './shops-service.service';

describe('ShopsServiceService', () => {
  let service: ShopsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
