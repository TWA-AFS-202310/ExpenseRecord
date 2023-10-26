import { Component } from '@angular/core';
import { ExpenseLogicService } from './services/expense-logic.service';
import { Subject } from 'rxjs';
import { IExpenseRecordDTO } from './DTOs/IExpenseRecordDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'Expense Record';

  recordSubjector: Subject<IExpenseRecordDTO[]> | undefined;

  constructor(
    private expenseLogicS: ExpenseLogicService
  ){
    this.recordSubjector = this.expenseLogicS.getSubjector();
  }

  deleteOne(id: string){
    this.expenseLogicS.deleteOneRecord(id);
  }

}
