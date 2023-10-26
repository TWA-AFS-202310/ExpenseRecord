import { HttpClient } from '@angular/common/http';
import { Component, Inject, Pipe, PipeTransform } from '@angular/core';

import { Subscription } from 'rxjs';
import { ExpenseRecordApiService } from '../../service/expense-record-api.service';
import { ExpenseRecord, ExpenseType } from '../../model/expense-record';



@Pipe({name: 'convertEnumToString'})
export class ConvertEnumToStringPipe implements PipeTransform {

    transform(num: ExpenseType): any {
        return ExpenseType[num]
    }
}
@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css'],
  providers: [ExpenseRecordApiService, HttpClient],
})
export class RecordTableComponent {
  public recordList: ExpenseRecord[] = [];
  public currRecordList: ExpenseRecord[] = [];
  
  constructor(
    private apiService: ExpenseRecordApiService,
    
  ){

  }
  getAllItems(){
    this.apiService.getAllItems$().subscribe(
      (res) => {
        this.recordList = res;
        this.currRecordList = res;
      }
    )
  }
  ngOnInit(): void {
    this.getAllItems();
  }
  onDelete(id: string){
    if (window.confirm("Do you really want to delete this?")){
      this.apiService.deleteItem$(id).subscribe(
        (res) => {
          this.getAllItems();
        }
      )
  }
}
}


