import { TestBed, inject } from '@angular/core/testing';

import { BitcoinService } from './bitcoin.service';

describe('BitcoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinService]
    });
  });

  it('should be created', inject([BitcoinService], (service: BitcoinService) => {
    expect(service).toBeTruthy();
  }));
});
