import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoDataService } from 'src/app/shared/services/todo-data.service';
import { Task } from 'src/app/models';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';

@Component({
  selector: 'app-todo-shell',
  templateUrl: './todo-shell.component.html',
  styleUrls: ['./todo-shell.component.css']
})
export class TodoShellComponent implements OnInit {
  @ViewChild('formRef', { static: false }) formRef: TodoFormComponent;

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

    this.resetInput();
  }

  toggletTaskStatus = (task: Task): void => {
    this.todoDataService.toggletTaskStatus({
      ...task,
      done: !task.done
    });
  }

  removeTask = (id: any): void => this.todoDataService.removeTask(id);

  resetInput = (): void => {
    this.task = '';
    this.formRef.inputRef.nativeElement.value = '';
  }

  constructor(
    private todoDataService: TodoDataService
  ) { }
}
