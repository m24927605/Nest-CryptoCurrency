import { TestBed, inject } from '@angular/core/testing';

import { ManageService } from './manage.service';

describe('ManageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageService]
    });
  });

  it('should be created', inject([ManageService], (service: ManageService) => {
    expect(service).toBeTruthy();
  }));
});
