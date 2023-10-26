import { Component,Inject, OnInit } from '@angular/core';
import { Expense } from '../Model/expense.model';
import { ExpenseService } from '../services/expense.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expense: Expense[] = [];

  constructor(private expenseService: ExpenseService) {
    this.getExpense();

   }

  ngOnInit(): void {
  }

  getExpense(): void {
    this.expenseService.getExpense()
      .subscribe(records => 
        {this.expense = records;
        console.log(this.expense)});
  }

  addExpense(expense: Expense): void {
    this.expenseService.createExpense(expense)
      .subscribe(() => {
        // 在添加成功后执行的逻辑
        this.getExpense(); // 刷新数据
      });
    this.expense.unshift(expense);
  }

  deleteExpense(index: number): void {
    this.expenseService.deleteExpense(index)
      .subscribe(() => {
        // 在删除成功后执行的逻辑
        this.getExpense(); // 刷新数据
      });
    this.expense.splice(index, 1);

  }



  parseAmount(value: string): number {
    return Number(value);
  }


}
