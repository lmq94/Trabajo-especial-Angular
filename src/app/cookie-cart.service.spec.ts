import { TestBed } from '@angular/core/testing';

import { CookieCartService } from './cookie-cart.service';

describe('CookieCartService', () => {
  let service: CookieCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
