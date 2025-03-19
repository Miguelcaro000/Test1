import { TestBed } from '@angular/core/testing';

import { TerremotosService } from './terremotos.service';

describe('TerremotosService', () => {
  let service: TerremotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerremotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
