import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { RecordDTO } from '../record';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-record-creation',
  templateUrl: './record-creation.component.html',
  styleUrls: ['./record-creation.component.css']
})
export class RecordCreationComponent implements OnInit {
  Description!:string;
  Type!:string;
  Cost!:number;
  Date!:string;
  private baseUrl: string;
  private http: HttpService;
  constructor( @Inject('BASE_URL') baseUrl: string,hs:HttpService) {
    this.http = hs;
    this.baseUrl = baseUrl;
  }

  ngOnInit(): void {
  }
Save()
{
  let record:RecordDTO={
    id: '',
    description: this.Description,
    type: this.Type,
    cost: this.Cost,
    date: this.Date
  }
  
  this.http.create(record).subscribe();
  location.reload();
}

}
