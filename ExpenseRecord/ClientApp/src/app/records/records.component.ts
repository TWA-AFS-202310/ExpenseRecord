import { Component, Input, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../Expense';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private http: ExpenseService, private route: ActivatedRoute) { }

  @Input()
  recordlist:Expense[] = [];

  
  selectedItem?: Expense;
  onSelect(item: Expense): void {
    this.selectedItem = item;
  }
  ngOnInit(): void {
    console.log(this.recordlist)
  }

}
