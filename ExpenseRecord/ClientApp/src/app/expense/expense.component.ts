import { Component, Inject, OnInit } from '@angular/core';
import { IExpenseItem } from './expenseItem';
import { HttpClient } from '@angular/common/http';
import { ExpenseService } from './expense.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: [ExpenseService] // 声明服务提供者
})

export class ExpenseComponent implements OnInit {

  constructor(private itemservice:ExpenseService,
    private route: ActivatedRoute){}

  title = "Expense Record"
  existingRecords : IExpenseItem[] = [];
  ngOnInit(): void {
  this.getAll();
  }

  
  // getAll(): void {
  //   this.itemservice.getItems().subscribe({
  //     next: (data) => {
  //       // 统一日期格式为 ISO 8601 格式
  //       data.forEach((item) => {
  //         item.createTime = this.formatDateToISO(item.createTime);
  //       });
  
  //       // 对数据按日期倒序排序
  //       this.existingRecords = data.sort((a, b) => <any>new Date(b.createTime) - <any>new Date(a.createTime));
  //     }
     
  //   });
  // }

  getAll(): void {
    this.itemservice.getItems().subscribe({
      next: (data) => {
        this.existingRecords = data;
      }
    });
  }
  
  formatDateToISO(dateString: string): string {
    if (/^\d{8}$/.test(dateString)) {
      const year = dateString.substring(0, 4);
      const month = dateString.substring(4, 6);
      const day = dateString.substring(6, 8);
      return `${year}-${month}-${day}`;
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    } else {
      return '';
    }
  }
  
  deleteItems(){
    const itemId :any = this.route.snapshot.paramMap.get('id');
    this.itemservice.deleteItem(itemId).subscribe()
  }
}


