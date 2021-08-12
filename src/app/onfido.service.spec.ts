import { TestBed } from '@angular/core/testing';

import { OnfidoService } from './onfido.service';

describe('OnfidoService', () => {
  let service: OnfidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnfidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
