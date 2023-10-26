import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../Expense';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../expense.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recorddetail',
  templateUrl: './recorddetail.component.html',
  styleUrls: ['./recorddetail.component.css']
})
export class RecorddetailComponent implements OnInit {

  @Input()
  record:Expense={
    id:'',
    description:'',
    type:'',
    amount:0,
    time:'',
  };

  recorddescription:string='';
  recordtype:string='';
  recordamount:number=0;
  recordtime:string='';
  recordid:string='';

  constructor(private route:ActivatedRoute,
    private http: ExpenseService,
    private location:Location) { }

  ngOnInit(): void {
    this.getRecord();
  }

  getRecord():void{
    const id=String(this.route.snapshot.paramMap.get('id'));
    this.http.getRecordById(id).subscribe(
      record=>{
      this.record=record, 
      this.recorddescription=record.description,
      this.recordtype=record.type,
      this.recordamount=record.amount,
      this.recordtime=record.time
      // console.log("--------------"+item.done+"-----"+item.favorite)
    }
    );
  }

  goBack():void{
    this.location.back();
  }
  // save():void{
  //   this.record.description=this.recorddescription;
  //   // this.item.createdtime=Number(this.itemcreatedtime);
  //   this.record.type=this.recordtype;
  //   this.record.amount=this.recordamount;
  //   this.record.time=this.recordtime;
  //   this.record.id=this.recordid;
  //   if(this.record){
  //     this.http.updateRecord(String(this.item.id),this.item).subscribe(()=>this.goBack());
  //   }
  // }
  delete():void{
    const id=String(this.route.snapshot.paramMap.get('id'));
    this.http.deleteItem(id).subscribe(()=>this.goBack());
  }
}
