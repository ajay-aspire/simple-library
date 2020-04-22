import { TestBed } from '@angular/core/testing';

import { LibSimpleService } from './lib-simple.service';

describe('LibSimpleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibSimpleService = TestBed.get(LibSimpleService);
    expect(service).toBeTruthy();
  });
});
