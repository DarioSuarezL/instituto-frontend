import { TestBed } from '@angular/core/testing';

import { CursoCreateService } from './curso-create.service';

describe('CursoCreateService', () => {
  let service: CursoCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
