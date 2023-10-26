import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/dataService';

export interface ExpenseResponse {
  id: string;
  description: string;
  type: string;
  amount: number;
  createdTime: number;
}

@Component({
  selector: 'app-response-list',
  templateUrl: './response-list.component.html',
  styleUrls: ['./response-list.component.css']
})
export class ResponseListComponent implements OnInit {
  constructor(private dataService: DataService) { }

  items: ExpenseResponse[] = []; 


  ngOnInit(): void {
    this.getResponseList();
  }

  getResponseList() {
    let subscription = this.dataService.getResponses().subscribe(responses => this.items = responses.sort((a, b) => b.createdTime - a.createdTime)
  );
    setTimeout(() => {
      subscription.unsubscribe();
    }, 1000);
  }

  deleteMethod(id : string) {
    let subscription = this.dataService.deleteResponse(id).subscribe(response => this.getResponseList());
    setTimeout(() => {
      subscription.unsubscribe();
    }, 1000);
  }

}
