import { Component,Inject, OnInit } from '@angular/core';
import { Expense } from '../Model/expense.model';
import { ExpenseService } from '../services/expense.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses!: Expense[];

  // expenses: Expense[] = [];
  newExpense: Expense = {
    id: 0,
    description: '',
    type: '',
    amount: 0,
    date: ''
  };

  // private baseUrl: string;
  // private http: HttpClient;

  // constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,) {
  //   this.http = http;
  //   this.baseUrl = baseUrl;
  // }

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {

    // this.http.get<Expense[]>(this.baseUrl + 'getExpense')
    // .subscribe(expenses => {
    //     this.expenses = expenses;
    //   }
    // );

    this.expenseService.getExpenses().subscribe(expenses => {
      this.expenses = expenses;
    });
  }

  addExpense() {

    this.expenseService.addExpense(this.newExpense).subscribe(newExpense => {
      // this.expenses = expense;
      this.expenses.unshift(newExpense);
      // this.getExpenses();
      this.newExpense = {
        id: 0,
        description: '',
        type: '',
        amount: 0,
        date: ''
      };
    });
  }

  deleteExpense(expense: Expense) {
    // this.expenseService.deleteExpense(expense).subscribe(() => {
    //   this.expenses = this.expenses.filter(e => e !== expense);
    // });
  }

  // ngOnInit() {
  //   this.getExpenses();
  // }

  // getExpenses() {
  //   this.expenseService.getExpenses().subscribe(
  //     expenses => this.expenses = expenses
  //   );
  // }

  // addExpense(expense: Expense) {
  //   this.expenseService.addExpense(expense).subscribe(() => {
  //     this.getExpenses();
  //   });
  // }

  // deleteExpense(expense: Expense) {
  //   this.expenseService.deleteExpense(expense).subscribe(() => {
  //     this.expenses = this.expenses.filter(e => e !== expense);
  //   });
  // }

}
