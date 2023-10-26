import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { expenseRecordDto } from './expenseRecord';
import { Observable } from 'rxjs/internal/Observable';
import { Subject, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  dataUrl = ''
  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string) { 
    this.dataUrl = `${baseUrl}/api/v1/ExpenseRecord`;
  }

  
  getExpenseRecords():Observable<expenseRecordDto[]>{
    return this.http.get<expenseRecordDto[]>(this.dataUrl)
  }

  createExpenseRecord(record: expenseRecordDto): Observable<expenseRecordDto>{
    return this.http.post<expenseRecordDto>(this.dataUrl,record)
  }

  deleteExpenseRecord(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.dataUrl + `/${id}`)
  }
}
