import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRecordListComponent } from './expense-record-list.component';

describe('ExpenseRecordListComponent', () => {
  let component: ExpenseRecordListComponent;
  let fixture: ComponentFixture<ExpenseRecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseRecordListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
