import { Component } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/services/task/task.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  historyList: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.historyList = this.getToDoList();
  }

  getToDoList(): Task[] {
    return this.taskService.getDoneTasks();
  }

  setTaskUndone(task: Task) {
    this.taskService.setAsUndone(task);
    this.historyList = this.getToDoList();
  }
}
