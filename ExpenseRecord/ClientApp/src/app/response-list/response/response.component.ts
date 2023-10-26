import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ExpenseResponse } from '../../response-list/response-list.component';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  @Input() expenseResponse: ExpenseResponse = { id: "-1", description: "default", type: "default", amount: 0, createdTime: Date.now() };
  @Output() deleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickDelete() {
    this.deleteEvent.emit(this.expenseResponse.id);
  }

}
