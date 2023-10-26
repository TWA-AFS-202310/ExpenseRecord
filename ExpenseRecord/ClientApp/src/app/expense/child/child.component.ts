import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INewExpenseItem } from '../newexpense';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private expenseService:ExpenseService) { }
  public Description:string='';
  public Type:string ="";
  public Amount :number  =0;
  ngOnInit(): void {
  }
  onBack(): void {
    this.router.navigateByUrl('/');
    //navigate(['items']);
  }
  save() {
    // if (!this.content) {
      const newItem: INewExpenseItem = {
        Description: this.Description,
        Type: this.Type,
        Amount:this.Amount
        
      }
      console.log(newItem)
       this.expenseService.addItems(newItem).subscribe()
    }
}
