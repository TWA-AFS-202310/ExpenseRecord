import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import { IExpenseRecordDTO } from 'src/app/DTOs/IExpenseRecordDTO';

@Component({
  selector: 'app-recotds-list',
  templateUrl: './recotds-list.component.html',
  styleUrls: ['./recotds-list.component.css']
})
export class RecordsListComponent implements OnInit {

  @Input()
  records: Subject<IExpenseRecordDTO[]> | undefined;

  @Output()
  deleteEvent = new EventEmitter<string>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  delete(event: any): void{
    this.deleteEvent.emit(event.srcElement.id);
  }

}
