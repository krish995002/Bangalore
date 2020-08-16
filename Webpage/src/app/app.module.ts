import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Employee } from './Employee/emp.component';
import { Review} from './Review/re.component';
import {Salary} from './Salary/sal.component';

@NgModule({
  declarations: [
    AppComponent,
    Employee,
    Review,
    Salary
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
