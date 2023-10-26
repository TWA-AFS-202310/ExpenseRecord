import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ExpenseRecord } from '../Models/ExpenseRecord';
import { ERService } from '../services/records.service';


@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  records!: ExpenseRecord[];


  private baseUrl: string;
  private http: HttpClient;
  private service:ERService;

  constructor(http: HttpClient, service:ERService ) {
    this.http = http;
    this.service = service;
  }

  ngOnInit(): void {
  }


  description:string;
  kind:string;
  amount:string;
  time:string

OnInit() {
  }


  onSubmit() {

    const record = {
      description:this.description,
      kind: this.kind,
      time: this.time,
      amount: this.amount
    }
    this.service.addTodo(record).subscribe(

    );
    location.reload()
    
    // this.addTodo.emit(record);
  }
}
