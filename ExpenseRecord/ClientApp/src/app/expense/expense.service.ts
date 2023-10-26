import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IExpenseItem } from './expenseItem';
import { INewExpenseItem } from './newexpense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = "https://localhost:7081/api/v1/Expense";
 //private baseUrl = "./assets/api/expense.json";
  constructor(private http: HttpClient,) {
    
  }

  getItems(): Observable<IExpenseItem[]> {
    return this.http.get<IExpenseItem[]>(this.baseUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data)))
      )};

  addItems(newItem:INewExpenseItem):Observable<IExpenseItem[]>{
    return this.http.post<[IExpenseItem]>(this.baseUrl,newItem)
  }
  
  deleteExpense(id:string):Observable<any>{
    const deleteUrl = `${this.baseUrl}/${id}`;
    console.log(deleteUrl);
    return this.http.delete(deleteUrl);
  }
}
