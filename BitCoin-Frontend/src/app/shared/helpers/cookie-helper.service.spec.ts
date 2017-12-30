import { TestBed, inject } from '@angular/core/testing';

import { CookieHelperService } from './cookie-helper.service';

describe('CookieHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieHelperService]
    });
  });

  it('should be created', inject([CookieHelperService], (service: CookieHelperService) => {
    expect(service).toBeTruthy();
  }));
});
