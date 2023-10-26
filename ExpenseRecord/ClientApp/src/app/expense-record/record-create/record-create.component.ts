import { Component, OnInit } from '@angular/core';
import { ExpenseType } from 'src/app/model/expense-record';
import { ExpenseRecordApiService } from 'src/app/service/expense-record-api.service';

@Component({
  selector: 'app-record-create',
  templateUrl: './record-create.component.html',
  styleUrls: ['./record-create.component.css']
})
export class RecordCreateComponent implements OnInit {
  public description: string = ""
  public type: ExpenseType = 0;
  public time: string ="";
  public amount: number = 0;
  public typeKeys = Object.keys(ExpenseType).filter((v) => isNaN(Number(v))) ;
  public typeValues = ExpenseType ;
  constructor(
    private apiService: ExpenseRecordApiService
  ) { 

  }

  ngOnInit(): void {
  }
  onSelected(value: string): void {
    console.log("change to type:" ,value);
	}

  onCreateItem(){
    this.apiService.addItem$(
      {
        description: this.description,
        type: this.type,
        time: this.time,
        amount: this.amount
      }
    ).subscribe(

    );
  }
  onInputDate(){
    // this.datePipe.transform(this.date, 'yyyy-mm-ddThh:mm:ss.SSSZZZZZ');
  }

}
