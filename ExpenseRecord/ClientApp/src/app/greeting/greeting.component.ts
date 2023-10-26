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
    id: 1,
    description: '',
    type: '',
    amount: '',
    date: ''
  };
  private baseUrl: string;
  private http: HttpClient;
  

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.loadExpenses();
  }

  ngOnInit(): void {
  }
  loadExpenses() {
    this.http.get<Record[]>(this.baseUrl + 'greeting').subscribe(
      (result: Record[]) => {
        this.expenses = result;
    });
  }
  addExpense( newExpense : Record) {
    if (this.newExpense.description && this.newExpense.type && this.newExpense.amount && this.newExpense.date) {
        // newExpense = this.newExpense;
      this.http.post(this.baseUrl + 'greeting', newExpense).subscribe(() => {
        
        this.loadExpenses();
      });
      
     // this.http.post<Record>(this.baseUrl + 'greeting', item, { responseType: 'text' as 'json' })
      //     .subscribe((result: Record) => {
      //       this.items = result;
      //     }, (error: any) => console.error(error));
      // }
    }
  }
    deleteExpense(Id: number) {
      console.log(Id);
      this.http.delete(this.baseUrl + 'greeting/' + Id).subscribe(() => {
        this.loadExpenses();
      });
  }







  // callApi(item : Record) {
  //   
}
