import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExpenseRecordService {
  private apiUrl = 'api/ExpenseRecord';

  constructor(private http: HttpClient) { }

  getExpenseRecords(): Observable<ExpenseRecord[]> {
    return this.http.get<ExpenseRecord[]>(this.apiUrl);
  }

  createExpenseRecord(expenseRecord: ExpenseRecord): Observable<ExpenseRecord> {
    return this.http.post<ExpenseRecord>(this.apiUrl, expenseRecord);
  }

  deleteExpenseRecord(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}

export interface ExpenseRecord {
  description: string;
  type: string;
  amount: number;
  date: string;
}
