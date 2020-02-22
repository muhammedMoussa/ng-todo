import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodoShellComponent } from './containers/todo-shell/todo-shell.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoShellComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: TodoShellComponent }
    ])
  ]
})
export class TodoModule { }
