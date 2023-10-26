import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Records } from 'src/app/records';

@Injectable({
  providedIn: 'root'
})

export class ExpenseRecordService{
  //itemsUrl = 'api/v1/ToDoItems';
  private baseUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl + "/greeting";
  }


  getAllRecords() {
    return this.http.get<Records[]>(this.baseUrl);
  }

  insertRecords(record:Records){
    return this.http.post<Records>(this.baseUrl,record);
  }
  deleteRecords(id:string){
    return this.http.delete<Records>(this.baseUrl+'/'+id);
  }

}
