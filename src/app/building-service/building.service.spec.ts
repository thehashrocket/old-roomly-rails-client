/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuildingServiceService } from './building-service.service';

describe('Service: BuildingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildingServiceService]
    });
  });

  it('should ...', inject([BuildingServiceService], (service: BuildingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
