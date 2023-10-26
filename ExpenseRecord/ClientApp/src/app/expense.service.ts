import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ExpenseCreationDto, ExpenseRecord } from './expense.type';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  baseURL: string = '/ExpenseRecord';

  constructor(private httpClient: HttpClient) { }

  getAllToDoItem(): Observable<ExpenseRecord[]> {
    return this.httpClient.get<ExpenseRecord[]>(this.baseURL).pipe(tap(_ => console.log('getAll')));;
  }

  createToDoItem(expenseCreationDto: ExpenseCreationDto): Observable<ExpenseRecord> {
    return this.httpClient.post<ExpenseRecord>(this.baseURL, expenseCreationDto).pipe(tap(_ => console.log('create', expenseCreationDto)));
  }

  deleteToDoItem(id: string): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseURL}/${id}`).pipe(tap(_ => console.log('delete', id)));;
    // const index = this.toDoItemList.findIndex(item => item.id === id);
    // this.toDoItemList.splice(index,1);
  }

}
