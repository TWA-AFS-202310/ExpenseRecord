import { Component, OnInit } from '@angular/core';
import { Expense } from '../Expense';
import { ExpenseService } from '../expense.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: ExpenseService, private route: ActivatedRoute) { }
  records: Expense[]=[];
  recordlist: Expense[]=[];
  // record: Expense=this.getRecord();
  inputmessage = "";
  // getRecord():Expense{
  //   return {
  //     id: '',
  //     description: '',
  //     time: '',
  //     type: '',
  //     amount: 0,
  //   };
  // }

  getRecords():void{
    this.http.getRecords().subscribe(
      _records => {
        this.records = [..._records];
        this.recordlist = [...this.records];
        this.recordlist.sort(
          (a, b) => a.time < b.time ? 1 : -1 
        )
        console.log(this.recordlist);
      }
    )
  }
  ngOnInit(): void {
    this.getRecords();
  }
  searchitem(searchStr:string){
    this.inputmessage=searchStr;
    this.recordlist=this.records.filter((v,i,_)=>{return v.description.includes(searchStr)});
  }

}
