import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDataService } from './services/todo-data.service';

const SHARED_PROVIDERS = [TodoDataService];
const SHARED_MODULES = [CommonModule];

@NgModule({
  declarations: [],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES],
  providers: [ ...SHARED_PROVIDERS ]
})

export class SharedModule { }
