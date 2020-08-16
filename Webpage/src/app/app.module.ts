import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Employee } from './Employee/emp.component';
import { Review} from './Review/re.component';

@NgModule({
  declarations: [
    AppComponent,
    Employee,
    Review
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
