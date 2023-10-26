import { Inject, Injectable } from '@angular/core';
import { IExpenseRecordsService } from '../interfaces/IExpenseRecordsService';
import { ExpenseRepositoryService } from './expense-repository.service';
import { Subject } from 'rxjs';
import { IExpenseRecordDTO } from '../DTOs/IExpenseRecordDTO';

@Injectable({
  providedIn: 'root'
})
export class ExpenseLogicService {

  records: IExpenseRecordDTO[] = [];

  recordsSubjector: Subject<IExpenseRecordDTO[]> = 
  new Subject<IExpenseRecordDTO[]>();

  constructor(@Inject(ExpenseRepositoryService) 
  private repository: IExpenseRecordsService) { 
    this.refresh();
  }

  public refresh(){
    this.repository.getRecords().subscribe(
      _rs => {
        this.records = _rs.slice();
        this.records.sort(
          (_r1, _r2) => _r1.date - _r2.date > 0 ? -1: 1
        )
        this.recordsSubjector.next(this.records);
      }
    );
  }

  public getSubjector() : Subject<IExpenseRecordDTO[]>{
    return this.recordsSubjector;
  }

  public createRecord(record: IExpenseRecordDTO){
    this.repository.createRecord(record).subscribe(
      _ => this.refresh()
    );
  }

  public deleteOneRecord(id: string){
    this.repository.deleteOneRecord(id).subscribe(
      _ => this.refresh()
    );
  }
}
