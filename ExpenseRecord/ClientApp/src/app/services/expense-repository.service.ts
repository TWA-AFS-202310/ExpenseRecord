import { Inject, Injectable } from '@angular/core';

import {IExpenseRecordsService} from '../interfaces/IExpenseRecordsService';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IExpenseRecordDTO } from '../DTOs/IExpenseRecordDTO';


@Injectable({
  providedIn: 'root'
})
export class ExpenseRepositoryService implements IExpenseRecordsService {

  url: string = '';

  constructor(private http: HttpClient, 
    @Inject('BASE_URL') private baseUrl: string) {
      this.url = `${this.baseUrl}/api/v1/expenserecord`;
     }

  getRecords(): Observable<IExpenseRecordDTO[]> {
    return this.http.get<IExpenseRecordDTO[]>(this.url);
  }
  createRecord(record: IExpenseRecordDTO): Observable<IExpenseRecordDTO> {
    return this.http.post<IExpenseRecordDTO>(this.url,record);
  }
  deleteOneRecord(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }
}
