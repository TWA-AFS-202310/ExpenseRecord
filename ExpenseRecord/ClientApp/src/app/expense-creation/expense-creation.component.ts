import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';



export enum ExpenseType {
  Meal= "Meal",
  Fun = "Fun",
  Grocery = "Grocery"
}


@Component({
  selector: 'app-expense-creation',
  templateUrl: './expense-creation.component.html',
  styleUrls: ['./expense-creation.component.css']
})
export class ExpenseCreationComponent implements OnInit {
  description: string = '';
  type: ExpenseType = ExpenseType.Meal;
  amount: number = 0;
  date: string = "";



  constructor(private service: ExpenseService) { }

  ngOnInit(): void {
  }

  create(){

  }

}
