import { Component, OnInit } from '@angular/core';
import { IExpenseRecordDTO } from 'src/app/DTOs/IExpenseRecordDTO';
import { ExpenseLogicService } from 'src/app/services/expense-logic.service';
import { ExpenseRepositoryService } from 'src/app/services/expense-repository.service';

@Component({
  selector: 'app-record-new',
  templateUrl: './record-new.component.html',
  styleUrls: ['./record-new.component.css']
})
export class RecordNewComponent implements OnInit {

  description: string = '';
  type: string = '';
  amount: number = 1;

  constructor(private repository: ExpenseLogicService) { }

  ngOnInit(): void {
  }

  new(){
    if (this.description === ''){
      alert("Please input description!");
      return;
    }else if(this.type === ''){
      alert("Please input type!");
      return;
    }

    let record = {
      'id': '',
      'description': this.description,
      'type': this.type,
      'amount': this.amount,
      'date': Date.now()
    }
    
    this.repository.createRecord(record);

  }
}
