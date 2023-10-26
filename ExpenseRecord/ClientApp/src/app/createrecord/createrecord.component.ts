import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../Expense';
import { Location } from '@angular/common';

@Component({
  selector: 'app-createrecord',
  templateUrl: './createrecord.component.html',
  styleUrls: ['./createrecord.component.css']
})
export class CreaterecordComponent implements OnInit {

  constructor(private http: ExpenseService, private route: ActivatedRoute, private location:Location) { }

  records: Expense[]=[];
  recorddes ='';
  recordtime = '';
  recordtype = '';
  recordam = 0;
  newrecord : Expense|undefined;
  
  add():void{
    // name = name.trim();
    // if(!name){return;}
    this.newrecord = {
      id: '',
      description: this.recorddes,
      time: this.recordtime,
      type: this.recordtype,
      amount: this.recordam,
    };
   
    this.http.createItem(this.newrecord).subscribe(()=>this.goBack());
  
  }
  goBack():void{
    this.location.back();
  }
  ngOnInit(): void {
  }

}
