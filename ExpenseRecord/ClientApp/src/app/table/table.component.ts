import { Component, OnInit } from '@angular/core';
import { ExpenseRecordService } from '../service/expenseRecord.service';
import { Records } from '../records';
//import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private expenseService:ExpenseRecordService){}
  public records?:Records[];

  ngOnInit(): void {
    this.expenseService.getAllRecords().subscribe(recordList =>{
      this.records = recordList;
    });
  }

  addRecord(record:Records){
    this.expenseService.insertRecords(record).subscribe();
  }

  deleteRecord(id:number){
    this.expenseService.deleteRecords(id).subscribe();
  }



}
