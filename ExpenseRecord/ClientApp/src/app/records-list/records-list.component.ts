import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { expenseRecordDto } from '../expenseRecord';
import { HttpServiceService } from '../http-service.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent implements OnInit {
  @Input()
  records: Subject<expenseRecordDto[]> | undefined

  @Output()
  deleteEvent = new EventEmitter<string>();

  constructor(private httpservice: HttpServiceService) { }

  ngOnInit(): void {
    
  }

  

  deleteRecord(id: string){
    this.deleteEvent.emit(id)
  }
}
