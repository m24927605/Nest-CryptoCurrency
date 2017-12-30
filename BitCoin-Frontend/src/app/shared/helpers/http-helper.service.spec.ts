import { TestBed, inject } from '@angular/core/testing';

import { HttpHelperService } from './http-helper.service';

describe('HttpHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHelperService]
    });
  });

  it('should be created', inject([HttpHelperService], (service: HttpHelperService) => {
    expect(service).toBeTruthy();
  }));
});
