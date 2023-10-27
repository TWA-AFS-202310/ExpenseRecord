import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { ExpenseCreationDto, ExpenseRecord } from '../expense.type';

@Component({
  selector: 'app-expense-display',
  templateUrl: './expense-display.component.html',
  styleUrls: ['./expense-display.component.css']
})
export class ExpenseDisplayComponent implements OnInit {
  description: string = '';
  type: string = '';
  amount: number = 0;
  date: string = '';
  expenseRecordList: ExpenseRecord[] = [];
  showWarning: boolean = false;

  constructor(private service: ExpenseService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  create(): void {
    console.log(this.checkInValid());
    if (this.checkInValid()) {
      this.showWarning = true;
    } else {
      const expenseItem: ExpenseCreationDto = {
        description: this.description,
        type: this.type,
        amount: this.amount,
        date: this.date
      };
      this.service.createToDoItem(expenseItem).subscribe(_ => this.refresh());
      this.refresh();
    }
  }

  checkInValid(): boolean {
    return (!this.description || !this.type || this.amount <= 0 || !this.date);
  }

  deleteRecord(id: string): void {
    this.service.deleteToDoItem(id).subscribe(_ => this.refresh());

  }

  refresh(): void {
    this.showWarning = false;
    this.service.getAllToDoItem().subscribe(list => {
      console.log(list);
      this.expenseRecordList = list.reverse();
    });
  }
}
