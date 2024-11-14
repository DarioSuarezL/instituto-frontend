import { TestBed } from '@angular/core/testing';

import { PermisosListService } from './permisos-list.service';

describe('PermisosListService', () => {
  let service: PermisosListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisosListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
