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
  date: string = "";
  expenseRecordList: ExpenseRecord[] = []

  constructor(private service: ExpenseService) { }

  ngOnInit(): void {
    this.refresh();
  }

  create(): void{
    console.log(this.date);
    const expenseItem: ExpenseCreationDto = {
      description: this.description,
      type: this.type,
      amount: this.amount,
      date: this.date
    }
    this.service.createToDoItem(expenseItem).subscribe();
    this.refresh();
  }

  deleteRecord(id: string): void{
    this.service.deleteToDoItem(id).subscribe();
    this.refresh();
  }
  refresh(): void {
    this.service.getAllToDoItem().subscribe(list => {
      this.expenseRecordList = list;
    });
  }
}
