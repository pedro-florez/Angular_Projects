import { TestBed } from '@angular/core/testing';

import { AcortadorInterceptor } from './acortador.interceptor';

describe('AcortadorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AcortadorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AcortadorInterceptor = TestBed.inject(AcortadorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
