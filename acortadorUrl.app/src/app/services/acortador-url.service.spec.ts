import { TestBed } from '@angular/core/testing';

import { AcortadorUrlService } from './acortador-url.service';

describe('AcortadorUrlService', () => {
  let service: AcortadorUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcortadorUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
