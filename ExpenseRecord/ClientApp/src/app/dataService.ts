import { Inject, Injectable } from '@angular/core';
import { ExpenseResponse } from './response-list/response-list.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.url = baseUrl + "/api/v1/ExpenseRecord";
  }

  responseList: ExpenseResponse[] = [];

  getResponses(): Observable<ExpenseResponse[]> {
    console.log(this.url);
    let observable = this.http.get<ExpenseResponse[]>(this.url);
    return observable;
  }

  addReponse(expenseResponse: ExpenseResponse) : Observable<ExpenseResponse>{
    let observable = this.http.post<ExpenseResponse>(this.url, expenseResponse);
    return observable;
  }

  deleteResponse(id: string): Observable<any>{
    let observable = this.http.delete<any>(this.url + "/" + id);
    return observable;
  }
}
