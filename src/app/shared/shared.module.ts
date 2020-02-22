import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDataService } from './services/todo-data.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

const SHARED_PROVIDERS = [TodoDataService];
const SHARED_MODULES = [CommonModule];
const SHARED_COMPONENTS = [TodoItemComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES, SHARED_COMPONENTS],
  providers: [ ...SHARED_PROVIDERS ]
})

export class SharedModule { }
