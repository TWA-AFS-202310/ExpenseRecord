import { Component, OnInit } from '@angular/core';
import { expenseRecordDto } from '../expenseRecord';
import { HttpServiceService } from '../http-service.service';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  description: string = ''
  type: string = ''
  amount: number = 0
  date: string = ''
  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
  }

  saveNewRecord() {
    var tempRecord = {
      "id": '',
      "description": this.description,
      "type": this.type,
      "amount": this.amount,
      "date": this.date
    }
    this.getDataService.createRecord(tempRecord)
    this.clear()
  }
  clear(){
    this.description = ''
    this.amount = 0
    this.type = ''
    this.date = ''
  }


}
