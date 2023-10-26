import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { expenseRecordDto } from '../expenseRecord';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {

  recordSubjector: Subject<expenseRecordDto[]> | undefined;
  constructor(private getDataService: GetDataService) {
    this.recordSubjector = this.getDataService.getSubjector();
   }
   deleteRecord(id: string){
    this.getDataService.deleteOneRecord(id)
   }
 
}
