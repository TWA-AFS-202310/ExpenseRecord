import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Record } from '../models/record';
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
   
  expenses: Record[] = [];
  newExpense: Record = {
    description: '',
    type: '',
    amount: '',
    date: ''
  };

  
  private baseUrl: string;
  private http: HttpClient;
  
  

  loadExpenses() {
    this.http.get<Record[]>(this.baseUrl + 'greeting').subscribe(
      (data: Record[]) => {this.expenses = data;
    });
  }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.loadExpenses();
  }

  ngOnInit(): void {
  }

  addExpense() {
    if (this.newExpense.description && this.newExpense.type && this.newExpense.amount && this.newExpense.date) {
     // this.expenses.unshift({ ...this.newExpense });
     
        
    this.http.post(this.baseUrl + 'greeting', this.newExpense, { responseType: 'text' as 'json' })
      .subscribe((result: Record[]) => {
        this.expenses = result;
      }, (error: any) => console.error(error));
        this.newExpense = {
        description: '',
        type: '',
        amount: '',
        date: ''
      };
    }
  }

  
    deleteExpense(id: number) {
      this.http.delete(`/api/expenses/${id}`).subscribe(() => {
        this.loadExpenses();
      });
  }







  // callApi(item : Record) {
  //   this.http.post<Record>(this.baseUrl + 'greeting', item, { responseType: 'text' as 'json' })
  //     .subscribe((result: Record) => {
  //       this.items = result;
  //     }, (error: any) => console.error(error));
  // }
}
