import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { RecordDTO } from 'src/app/record';

@Component({
  selector: 'app-record-display',
  templateUrl:'./record-display.component.html',
  styleUrls: ['./record-display.component.css']
})
export class RecordDisplayComponent implements OnInit {
 ITEMS! : RecordDTO[];
  http!: HttpService;

 constructor(hs: HttpService) {
  this.http =hs;
 }

  ngOnInit(): void {
    this.DisplayAll();
  }

  DisplayAll()
  {
    this.http.getAll().subscribe(_items => this.ITEMS=_items);
  }
  Delete(event: any)
  {
    //this.http.delete()
    console.log(event);
    let recordId = event.srcElement.id;
    this.http.delete(recordId);
    location.reload();  }
}
