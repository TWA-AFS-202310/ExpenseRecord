import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ExpenseRecord } from './greeting/expense-record';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExpenseService implements OnInit {

  private baseUrl: string;
  private http: HttpClient;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
 
    this.baseUrl = baseUrl + "/greeting";
  }

  ngOnInit(): void {

  }

  getRecords(): Observable<ExpenseRecord[]> {
    console.log("get from service")
    return this.http.get<ExpenseRecord[]>(this.baseUrl);
  }

  deleteRecord(id: string): Observable<any> {
    console.log(this.baseUrl + "/" + id)
    return this.http.delete(this.baseUrl + "/" + id);
  }

  addRecord(newRecord: ExpenseRecord): Observable<any> {
    console.log("from recrod")
    return this.http.post<ExpenseRecord>(this.baseUrl, newRecord)
  }
}
