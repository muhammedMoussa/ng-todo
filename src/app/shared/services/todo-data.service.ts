import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from 'src/app/models';

@Injectable()

export class TodoDataService {
  tasks$ = new BehaviorSubject<Task[]>(null);

  getTasks = (): Observable<Task[]> => {
    if (!this.checkOldTasks()) {
      this.tasks$.next(null);
      return;
    }

    this.tasks$.next(this.getOldTasks());
  }

  addTask = (task: Task): void => {
    const Tasks: Task[] = this.getStoredTasks() || [];
    Tasks.push(task);
    this.storeTasks(Tasks);
  }

  removeTask = (itaskId: any): void => {
    const Tasks: Task[] = this.getStoredTasks();
    const filteredTasks = Tasks.filter(i => i.id !== itaskId);
    this.refreshTasks(filteredTasks);
  }

  toggletTaskStatus = (task: Task): void => {
    const Tasks: Task[] = this.getStoredTasks();

    const index = Tasks.findIndex(t => t.id === task.id);
    Tasks[index] = task;
    this.refreshTasks(Tasks);
  }

  storeTasks = (tasks: Task[]): void => {
    let Tasks: Task[] = this.getStoredTasks();
    Tasks = [...tasks];
    this.refreshTasks(Tasks);
  }

  refreshTasks = (tasks: Task[] | any): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.tasks$.next(tasks);
  }

  checkOldTasks = (): boolean => localStorage.getItem('tasks') ? true : false;
  getOldTasks = (): Task[] => this.getStoredTasks();
  getStoredTasks = (): any => JSON.parse(localStorage.getItem('tasks'));
}
