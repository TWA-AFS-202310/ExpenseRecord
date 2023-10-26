import { Inject, Injectable, inject } from '@angular/core';
import { expenseRecordDto } from './expenseRecord';
import { Subject } from 'rxjs/internal/Subject';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  records: expenseRecordDto[] = []
  recordsSubjector: Subject<expenseRecordDto[]> = new Subject<expenseRecordDto[]>()

  constructor(@Inject(HttpServiceService) private httpService: HttpServiceService) { 
    this.refresh()
  }

  refresh(){
    this.httpService.getExpenseRecords().subscribe(
      (_records) => {
        this.records = _records.slice()
        this.records.reverse()
        this.recordsSubjector.next(this.records);
      }
    );
  }

  public getSubjector(): Subject<expenseRecordDto[]>{
    return this.recordsSubjector
  }

  public createRecord(record: expenseRecordDto){
    this.httpService.createExpenseRecord(record).subscribe(
      _ => this.refresh()
    );
  }

  public deleteOneRecord(id: string){
    this.httpService.deleteExpenseRecord(id).subscribe(
      _ => this.refresh()
    );
  }
}
