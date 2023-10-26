import { TestBed } from '@angular/core/testing';

import { ExpenseRecordService } from './expense-record.service';

describe('ExpenseRecordService', () => {
  let service: ExpenseRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
