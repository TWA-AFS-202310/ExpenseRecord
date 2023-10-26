import { Injectable } from '@angular/core';
import { CategoryType, Task, NewTask, returnTask } from 'src/app/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public apiURL = '/api/v1/ExpenseRecord';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiURL).pipe(catchError(this.errorHandler));
  }
  addTask(task: NewTask): Observable<returnTask> {
    return this.httpClient.post<returnTask>(this.apiURL, task, this.httpOptions).pipe(catchError(this.errorHandler))
  }
  getTasksByID(id: number): Observable<Task> {
    return this.httpClient.get<Task>(this.apiURL + id).pipe(catchError(this.errorHandler))
  }
  updateUser(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(this.apiURL + task.id, JSON.stringify(task), this.httpOptions).pipe(catchError(this.errorHandler))
  }
  removeTask(id: number) {
    return this.httpClient.delete<Task>(this.apiURL + id, this.httpOptions).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: {
    error: {
      message: string;
    }; status: any; message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  /* 
  CREATE
  **/
  createNewTask(): Task {
    const newTask: Task = {
      id: undefined,
      description: "",
      category: null,
      isUrgent: false,
      doneDate: null
    }

    return newTask;
  }


  addToList(newTask: Task): Observable<returnTask> {
    // newTask.id = this.generateId();
    // const toDoList = this.getToDos();
    // toDoList.push(newTask);
    // this.saveToDos(toDoList);
    let nt: NewTask = {
      description: newTask.description,
      type: "",
      amount: 0
    }
    return this.addTask(nt)
  }

  deleteFromList(currentTask: Task) {
    const toDoList: Task[] = this.getToDos();
    const id = currentTask.id;

    const taskToFind = toDoList.find(task => task.id === id);

    let index: number;
    taskToFind ? index = toDoList?.indexOf(taskToFind) : index = -1;
    this.removeTask(index);
    //toDoList.splice(index, 1);
    this.saveToDos(toDoList);
    
  }

  /* 
  UPDATE
  **/
  changeTaskCategory(currentTask: Task, categorySelected: string): void {
    const newCategory = categorySelected as CategoryType;
    currentTask.category = newCategory;
  }

  changeTaskPriority(currentTask: Task): void {
    let isUrgent = currentTask.isUrgent;
    isUrgent ? isUrgent = false : isUrgent = true;
    currentTask.isUrgent = isUrgent;
  }

  changeTaskContent(currentTask: Task, newContent: string): void {
    currentTask.description = newContent;
  }

  setAsDone(currentTask: Task) {
    const toDoList: Task[] = this.getToDos();
    const id = currentTask.id;
    const taskToFind = toDoList.find(task => task.id === id);

    let index: number;
    taskToFind ? index = toDoList?.indexOf(taskToFind) : index = -1;

    currentTask.doneDate = new Date();

    toDoList.splice(index, 1);
    toDoList.push(currentTask);
    this.saveToDos(toDoList);
  }


  // UNDONE
  setAsUndone(currentTask: Task) {
    const toDoList: Task[] = this.getToDos();
    const id = currentTask.id;
    const taskToFind = toDoList.find(task => task.id === id);

    let index: number;
    taskToFind ? index = toDoList?.indexOf(taskToFind) : index = -1;

    currentTask.doneDate = null;

    toDoList.splice(index, 1);
    toDoList.push(currentTask);
    this.saveToDos(toDoList);
  }

  updateTask(currentTask: Task) {
    const toDoList: Task[] = this.getToDos();
    const id = currentTask.id;

    const taskToFind = toDoList.find(task => task.id === id);

    let index: number;
    taskToFind ? index = toDoList?.indexOf(taskToFind) : index = -1;

    toDoList.splice(index, 1);
    toDoList.push(currentTask);
    this.saveToDos(toDoList);
  }

  deleteTask(currentTask: Task) {
    const toDoList: Task[] = this.getToDos();
    const id = currentTask.id;

    const taskToFind = toDoList.find(task => task.id === id);

    let index: number;
    taskToFind ? index = toDoList?.indexOf(taskToFind) : index = -1;

    toDoList.splice(index, 1);
    this.saveToDos(toDoList);

  }
  /* 
  GET
  **/
  getDoneTasks() {
    const allTasks = this.getToDos();
    const filterTasks = allTasks.filter((task: { doneDate: null; }) => task.doneDate !== null);
    return filterTasks;
  }

  getUnDoneTasks(): Task[] {
    const allTasks = this.getToDos();
    const filterTasks = allTasks.filter((task: { doneDate: null; }) => task.doneDate === null);
    return filterTasks;
  }

  getTaskById(id: number): Task {
    const toDoList = this.getToDos();
    return toDoList.find((task: { id: number; }) => task.id === id)
  }


  // LocalStorage
  createToDoStorage() {
    const toDoStorage = JSON.stringify([]);
    localStorage.setItem('todo', toDoStorage);
  }

  getToDos() {
    const toDoList = localStorage.getItem('todo');
    if (toDoList) {
      return JSON.parse(toDoList);
    } else {
      this.createToDoStorage();
      this.getToDos();
    }
  }

  generateId(): number {
    const toDoList = this.getToDos();
    return toDoList.length > 0 ? toDoList.length + 1 : 1;
  }

  saveToDos(tasks: Task[]): void {
    localStorage.setItem('todo', JSON.stringify(tasks))
  }

}
