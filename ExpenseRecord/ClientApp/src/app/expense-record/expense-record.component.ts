import { Component, OnInit } from '@angular/core';
import { ExpenseRecord,ExpenseRecordService } from '../expense-record.service';

@Component({
  selector: 'app-expense-record',
  templateUrl: './expense-record.component.html',
  styleUrls: ['./expense-record.component.css']
})
export class ExpenseRecordComponent implements OnInit{
  expenseRecords: ExpenseRecord[] = [];

  constructor(private expenseRecordService: ExpenseRecordService) {
    this.getExpenseRecords();

   }

  ngOnInit(): void {
  }

  getExpenseRecords(): void {
    this.expenseRecordService.getExpenseRecords()
      .subscribe(records => 
        {this.expenseRecords = records;
        console.log(this.expenseRecords)});
  }

  addExpenseRecord(expenseRecord: ExpenseRecord): void {
    this.expenseRecordService.createExpenseRecord(expenseRecord)
      .subscribe(() => {
        // 在添加成功后执行的逻辑
        this.getExpenseRecords(); // 刷新数据
      });
    this.expenseRecords.unshift(expenseRecord);
  }

  deleteExpenseRecord(index: number): void {
    this.expenseRecordService.deleteExpenseRecord(index)
      .subscribe(() => {
        // 在删除成功后执行的逻辑
        this.getExpenseRecords(); // 刷新数据
      });
    this.expenseRecords.splice(index, 1);

  }



  parseAmount(value: string): number {
    return Number(value);
  }
}

