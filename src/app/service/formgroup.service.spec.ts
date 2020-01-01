import { TestBed } from '@angular/core/testing';

import { FormgroupService } from './formgroup.service';

describe('FormgroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormgroupService = TestBed.get(FormgroupService);
    expect(service).toBeTruthy();
  });
});
