import { TestBed } from '@angular/core/testing';

import { RolCreateService } from './rol-create.service';

describe('RolCreateService', () => {
  let service: RolCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
