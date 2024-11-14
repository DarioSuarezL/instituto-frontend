import { TestBed } from '@angular/core/testing';

import { ProfesoresListService } from './profesores-list.service';

describe('ProfesoresListService', () => {
  let service: ProfesoresListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesoresListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
