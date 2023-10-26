import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseRecord } from '../models/expense-record';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "";  // 更改为你的后端API地址

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.apiUrl = baseUrl + 'ExpenseRecord/';
  }

  // 获取所有items
  getItems(): Observable<ExpenseRecord[]> {
    console.log(this.apiUrl);
    return this.http.get<ExpenseRecord[]>(`${this.apiUrl}`);
  }

  // 根据ID获取item
  getItemById(id: number): Observable<ExpenseRecord> {
    return this.http.get<ExpenseRecord>(`${this.apiUrl}/${id}`);
  }

  // 添加新item
  addItem(item: ExpenseRecord): Observable<ExpenseRecord> {
    return this.http.post<ExpenseRecord>(`${this.apiUrl}`, item);
  }

  // 更新item
  updateItem(id: number, item: ExpenseRecord): Observable<ExpenseRecord> {
    return this.http.put<ExpenseRecord>(`${this.apiUrl}/${id}`, item);
  }

  // 删除item
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
