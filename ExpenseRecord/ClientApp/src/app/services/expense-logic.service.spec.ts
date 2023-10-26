import { TestBed } from '@angular/core/testing';

import { ExpenseLogicService } from './expense-logic.service';

describe('ExpenseLogicService', () => {
  let service: ExpenseLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
