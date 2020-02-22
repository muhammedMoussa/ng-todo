import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @ViewChild('inputRef', { static: false }) inputRef: ElementRef;


  @Input() task: string;
  @Output() OnEnter: EventEmitter<any> = new EventEmitter<any>();
}
