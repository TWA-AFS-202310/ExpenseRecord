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

  ngOnInit(): void {
    this.apiService.getAllItems$().subscribe(
      (res) => {
        this.recordList = res;
        this.currRecordList = res;
      }
    )
  }
  onDelete(item: ExpenseRecord){
    if (window.confirm("Do you really want to delete this?")){

  }
}
}


