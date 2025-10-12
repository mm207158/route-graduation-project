import { TestBed } from '@angular/core/testing';

import { BrandsServicesService } from './brands-services.service';

describe('BrandsServicesService', () => {
  let service: BrandsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
