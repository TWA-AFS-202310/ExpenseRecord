import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from './Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  dataurl = 'https://localhost:7095/Expense';

  constructor(private http:HttpClient, 
    @Inject('BASE_URL') private baseUrl: string) { 
      this.dataurl = `${baseUrl}/expense`;
    }
  
  getRecords():Observable<Expense[]>{
    return this.http.get<Expense[]>(this.dataurl);
  }
  getRecordById(id:string):Observable<Expense>{
    return this.http.get<Expense>(this.dataurl+`/${id}`);
  }
  createItem(item:Expense):Observable<Expense>{
    console.log(item)
    return this.http.post<Expense>(this.dataurl,item);
  }
  deleteItem(id:string):Observable<Object>{
    return this.http.delete(this.dataurl+`/${id}`);
  }
}
