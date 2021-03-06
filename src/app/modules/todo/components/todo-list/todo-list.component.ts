import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from 'src/app/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() tasks$: Observable<Task[]>;
  @Output() OnToggleTask: EventEmitter<any> = new EventEmitter<any>();
  @Output() OnRemoveTask: EventEmitter<any> = new EventEmitter<any>();
}
