import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseResponse } from '../response-list/response-list.component';
import { DataService } from '../dataService';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.css']
})
export class BottomPanelComponent implements OnInit{
  expenseResponse: ExpenseResponse = { id: "new", description: "", type: "", amount: 0, createdTime: Date.now() };
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.clearInput();
  }

  onClickAdd() {
    let subscription = this.dataService.addReponse(this.expenseResponse).subscribe(response => { this.clearInput(); location.reload(); });
    setTimeout(() => {
      subscription.unsubscribe();
    }, 1000);
  }

  clearInput() {
    this.expenseResponse = { id: "new", description: "", type: "", amount: 0, createdTime: Date.now() };
  }
}
