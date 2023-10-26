import { Component, OnInit } from '@angular/core';
import { EXPENSES } from '../expenseList';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ExpenseList = EXPENSES;
  temp: Expense[] = [];

  add(s1: string, s2: string, s3: string, s4: string) {
    this.temp.push({ Description: s1, Type: s2, Amount: s3, Date: s4 });
    for (var i = 0; i < this.ExpenseList.length; i++) {
      this.temp.push(this.ExpenseList[i]);
    }
    this.ExpenseList = this.temp;
    this.temp = [];
  }

  delete(s: string) {
    for (var i = 0; i < this.ExpenseList.length; i++) {
      if (s != this.ExpenseList[i].Description) this.temp.push(this.ExpenseList[i]);
    }
    this.ExpenseList = this.temp;
    this.temp = [];
  }
}
