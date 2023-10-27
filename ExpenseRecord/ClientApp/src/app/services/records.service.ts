import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExpenseRecord } from '../Models/ExpenseRecord';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ERService {
  todos:ExpenseRecord[] = []
  todosUrl:string = 'https://localhost:44425/ExpenseRecord';

  constructor(private http:HttpClient) { }

  // Get Todos
  getTodos():Observable<ExpenseRecord[]> {
    return this.http.get<ExpenseRecord[]>(this.todosUrl);
  }

  // Delete Todo
  deleteTodo(description:string):Observable<ExpenseRecord> {
    const url = `${this.todosUrl}/${description}`;
    return this.http.delete<ExpenseRecord>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo:ExpenseRecord):Observable<ExpenseRecord> {
    return this.http.post<ExpenseRecord>(this.todosUrl, todo, httpOptions);
  }


}
