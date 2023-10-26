import { Component } from '@angular/core';
import { Task } from 'src/app/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';
@Component({
  selector: 'app-task-deletion',
  templateUrl: './task-deletion.component.html',
  styleUrls: ['./task-deletion.component.css']
})
export class TaskDeletionComponent {
  currentTask?: Task;

  isFormCompleted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService, private route: Router) { }

  ngOnInit() {
    this.getTask();
  }

  isCompleted() {
    if (this.currentTask!.description.length > 0 && this.currentTask?.category !== null) {
      this.isFormCompleted = true;
    } else {
      this.isFormCompleted = false;
    }
  }

  deleteTask(updatedTask: Task) {
    this.currentTask = updatedTask;
    this.isCompleted();
  }

  getTask() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.currentTask = this.taskService.getTaskById(id);
  }

  sendDeletedTask() {
    this.taskService.updateTask(this.currentTask!);
    this.route.navigate([""]);
  }
}
