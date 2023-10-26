import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Expense } from '../Model/expense.model';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  expenses: Expense[] = [];
  newExpense: Expense = {
    // id: 0,
    description: '',
    type: '',
    amount: 0,
    date: ''
  };
  private baseUrl: string;
  private http: HttpClient;

  

  // private baseUrl: string;
  // private http: HttpClient;

  // constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,) {
  //   this.http = http;
  //   this.baseUrl = baseUrl;
  // }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.getExpenses();
  }

  ngOnInit() {
    // this.getExpenses();
  }

  getExpenses() {
    this.http.get<Expense[]>(this.baseUrl + 'greeting').subscribe(
      (result: Expense[]) => {
        this.expenses = result;
    });
  }

  addExpense() {
    if (this.newExpense.description && this.newExpense.type && this.newExpense.amount && this.newExpense.date) {
      this.http.post<Expense>(this.baseUrl + 'greeting', this.newExpense )
      .subscribe((result: Expense)=> {
      this.getExpenses();
      });


    }
  }
  deleteExpense(Id: number) {
    this.http.delete(this.baseUrl + 'greeting/' + Id).subscribe(() => {
      this.getExpenses();
    });
  }
}
