import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task: Task;
  @Output() OnToggleTask: EventEmitter<any> = new EventEmitter<any>();
  @Output() OnRemoveTask: EventEmitter<any> = new EventEmitter<any>();
}
