import { Component } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/services/task/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.css']
})

export class TaskCreationComponent {

  currentTask?: Task;

  isFormCompleted: boolean = false;

  constructor(private taskService: TaskService, private route: Router) { }

  ngOnInit() {
    this.createNewTask();
  }

  isCompleted() {
    if (this.currentTask!.description.length > 0 && this.currentTask?.category !== null) {
      this.isFormCompleted = true;
    } else {
      this.isFormCompleted = false;
    }
  }

  createNewTask() {
    this.currentTask = this.taskService.createNewTask();
    // this.currentTask = this.taskService.addTask();
  }

  updateTask(updatedTask: Task) {
    this.currentTask = updatedTask;
    this.isCompleted();
  }

  validateTask() {
    this.taskService.addToList(this.currentTask!).subscribe((res) => {
      let ntnew: Task = {
        description: res.description,
        isUrgent: false,
        doneDate: null
      }
      const toDoList = this.taskService.getToDos();
      toDoList.push(ntnew);
      this.taskService.saveToDos(toDoList);
      this.route.navigate([""]);

    });

  }
}
