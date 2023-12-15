import { TestBed } from '@angular/core/testing';

import { ListanimalService } from './listanimal.service';

describe('ListanimalService', () => {
  let service: ListanimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListanimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
