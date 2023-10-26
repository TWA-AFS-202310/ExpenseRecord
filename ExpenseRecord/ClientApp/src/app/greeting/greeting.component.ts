import {Component, Inject, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ExpenseRecord } from './expense-record';
import { ExpenseService } from '../expense-service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit {
  name!: string;
  greeting!: string;

  public records?: ExpenseRecord[];

  record: ExpenseRecord = { id: "default", description: "This is a default record", createdTime: new Date(), amount: 100, type: "School" }

  constructor(private expenseService: ExpenseService) {
  
  }

  ngOnInit(): void {
    console.log("This tes");
    this.expenseService.getRecords().subscribe(records => {
      this.records = records
    })
  }

  getDescription(event: any) {
    this.record.description = event.target.value
  }

  getAmount(event: any) {
    this.record.amount = event.target.value
  }

  getType(event: any) {
    this.record.type = event.target.value
  }

  addNewRecord() {
    console.log("click add record")
    this.expenseService.addRecord(this.record).subscribe(() => location.reload());
    this.expenseService.getRecords().subscribe(records => {
      this.records = records
    })
  }

  deleteRecord(id: string) {
    console.log("click delete record" + id)
    this.expenseService.deleteRecord(id).subscribe();
    this.expenseService.getRecords().subscribe(records => {
      this.records = records;
      location.reload()
    })
  }
}

