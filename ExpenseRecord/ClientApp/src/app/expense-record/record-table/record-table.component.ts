import { HttpClient } from '@angular/common/http';
import { Component, Pipe, PipeTransform } from '@angular/core';

import { Subscription } from 'rxjs';
import { ExpenseRecordApiService } from '../../service/expense-record-api.service';
import { ExpenseRecord } from '../../model/expense-record';




@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css'],
  providers: [ExpenseRecordApiService, HttpClient],
})
export class RecordTableComponent {
  public recordList: ExpenseRecord[] = [];
  public currRecordList: ExpenseRecord[] = [];

}
