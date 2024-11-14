import { TestBed } from '@angular/core/testing';

import { CursosListService } from './cursos-list.service';

describe('CursosListService', () => {
  let service: CursosListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
