import { Component, OnInit } from '@angular/core';
import { ERService } from '../services/records.service';
import { ExpenseRecord } from '../Models/ExpenseRecord';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private todoService:ERService) { }

  todos:ExpenseRecord[];
  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });

}
deleteTodo(description:string) {
  // Remove From UI
  this.todoService.deleteTodo(description).subscribe(  ()=>location.reload());
  // this.todos = this.todos.filter(t => t.description !== description);
  //Remove from server


}
}
