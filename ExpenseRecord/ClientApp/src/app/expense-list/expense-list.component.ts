import { Component, OnInit } from '@angular/core';
import { EXPENSES } from '../expenseList';

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

  add() {
    this.ExpenseList[0].Description = "kevin";
    this.ExpenseList[1].Amount += 100;
  }

}
