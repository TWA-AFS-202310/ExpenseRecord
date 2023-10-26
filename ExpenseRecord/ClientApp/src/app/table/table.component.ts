import { Component, OnInit } from '@angular/core';
import { ExpenseRecordService } from '../service/expenseRecord.service';
import { Records } from '../records';

//import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  constructor( private expenseService:ExpenseRecordService){}
  public records?:Records[] =  [{id:"1",amount:32,time:"111",description:"ss",type:"d"},{id:"1",amount:32,time:"111",description:"ss",type:"d"}];
  public inputReocrd:Records = {id:"1",amount:32,time:"111",description:"ss",type:"d"};
  public counter:number = 0;

  ngOnInit(): void {
    this.expenseService.getAllRecords().subscribe(recordList =>{
      this.records = recordList;
    });
  }

  addRecord(){
    this.inputReocrd.id = this.counter.toString();
    this.counter.toString();
    this.counter +=1;
    this.expenseService.insertRecords(this.inputReocrd).subscribe(()=> location.reload());
  }

  deleteRecord(id:string){
    this.expenseService.deleteRecords(id).subscribe(()=> location.reload());
  }

  moniterAmount(event:any){
    this.inputReocrd.amount = event.target.value;
  }

  moniterTime(event:any){
    this.inputReocrd.time = event.target.value;
  }

  moniterDes(event:any){
    this.inputReocrd.description = event.target.value;
  }
  moniterType(event:any){
    this.inputReocrd.type = event.target.value;
  }
}

