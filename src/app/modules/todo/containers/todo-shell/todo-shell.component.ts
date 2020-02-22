import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/shared/services/todo-data.service';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.css']
})
export class TodoShellComponent implements OnInit {
  tasks$: Observable<Task[]>;
  task = '';

  ngOnInit(): void {
    this.getTasks();
    this.getTaskObservable();
  }

  getTasks = (): any => this.todoDataService.getTasks();
  getTaskObservable = (): Observable<Task[]> => this.tasks$ = this.todoDataService.tasks$;

  addTask = (e: any): void => {
    if (!e.target.value) { return; }
    this.todoDataService.addTask({
      id: Date.now(),
      task: e.target.value,
      done: false
    });

    this.task = '';
  }

  toggletTaskStatus = (task: Task): void => {
    this.todoDataService.toggletTaskStatus({
      ...task,
      done: !task.done
    });
  }

  removeTask = (id: any): void => this.todoDataService.removeTask(id);

  constructor(
    private todoDataService: TodoDataService
  ) { }
}
