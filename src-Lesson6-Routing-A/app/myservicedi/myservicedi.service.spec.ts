import { TestBed, inject } from '@angular/core/testing';

import { MyservicediService } from './myservicedi.service';

describe('MyservicediService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyservicediService]
    });
  });

  it('should be created', inject([MyservicediService], (service: MyservicediService) => {
    expect(service).toBeTruthy();
  }));
});
