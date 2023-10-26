import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ExpenseRecordService } from '../service/expenseRecord.service';
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  name!: string;
  greeting!: string;

  constructor(private expenseService:ExpenseRecordService){}

  ngOnInit(): void {
  }

  greet() {
    this.expenseService.getAllRecords().subscribe();
  }
  /*
  callApi(name: string) {
    this.http.get<Any[]>(this.baseUrl, {responseType: 'text' as 'json'})
      .subscribe((result: string) => {
        this.greeting = result;
      }, (error: any) => console.error(error));
  }*/
}
