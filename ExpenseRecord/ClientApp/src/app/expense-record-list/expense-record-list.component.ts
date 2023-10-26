import { ExpenseRecord } from '../models/expense-record';
import { ApiService } from '../services/api.service';
import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { timestamp } from 'rxjs';


@Component({
  selector: 'app-expense-record-list',
  templateUrl: './expense-record-list.component.html',
  styleUrls: ['./expense-record-list.component.css'],
})
export class ExpenseRecordListComponent implements OnInit {

  ngOnInit(): void {
    
  }
  newExpense: ExpenseRecord = {
    id: 0,
    description: '',
    type: '',
    amount: 0,
    date:  new Date().toLocaleString(),
  };
  listOfData: ExpenseRecord[] = [];

  constructor(private apiService: ApiService,) {
    // 设置默认今天的日期
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    this.newExpense.date = `${year}-${month}-${day}`;
    this.reset();
  };

  searchTerm: string = '';  

  search() {
    if (this.searchTerm) {
      this.listOfData = this.listOfData.filter(expense =>
        expense.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  addExpense() {
    if (this.newExpense.description && this.newExpense.type && this.newExpense.amount && this.newExpense.date) {
      this.apiService.addItem(this.newExpense).subscribe((res) => {
        this.listOfData.push(res);
      });
      this.newExpense = { id:0, description: '', type: '', amount: 0, date: '' };
    }
    this.reset();
  }
  

  deleteExpense(index: number) {
    this.apiService.deleteItem(this.listOfData[index].id).subscribe(() => { });
    this.reset();
  }

  reset() {
    this.apiService.getItems().subscribe((res) => {
      this.listOfData = res;
      this.listOfData.sort((a, b) => {
        return a.id < b.id ? 1 : -1;
      });
      this.searchTerm = '';
    });
  }
  editingIndex: number | null = null;

  editExpense(index: number) {
    this.editingIndex = index;
  }

  saveExpense(index: number) {
    this.apiService.updateItem(this.listOfData[index].id, this.listOfData[index]).subscribe(() => { });
    this.reset();
    this.editingIndex = null;
  }

  cancelEdit() {
    this.editingIndex = null;
  }

  sortData(column: string) {
    if (!this.listOfData || this.listOfData.length === 0) {
      return;
    }
    if (column === 'description' || column === 'type'  || column === 'date') {
      const isAsc = this.listOfData[0][column] === [...this.listOfData].sort((a, b) => a[column].localeCompare(b[column]))[0][column];
    
      this.listOfData.sort((a, b) => {
        if (a[column] === b[column]) {
          return 0;
        }
        return isAsc ? b[column].localeCompare(a[column]) : a[column].localeCompare(b[column]);
      });
      return;
    } else if (column === 'amount') {
      const isAsc = this.listOfData[0][column] === [...this.listOfData].sort((a, b) => a[column] - b[column])[0][column];
    
      this.listOfData.sort((a, b) => {
        if (a[column] === b[column]) {
          return 0;
        }
        return isAsc ? b[column] - a[column] : a[column] - b[column];
      });
      return;
    }
  }
  
}
