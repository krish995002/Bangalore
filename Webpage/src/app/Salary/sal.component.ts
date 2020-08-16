import { Component, ANALYZE_FOR_ENTRY_COMPONENTS, Output, EventEmitter } from '@angular/core';

@Component({
  selector:'child1',
  templateUrl: './sal.component.html',
  styleUrls: ['./sal.component.sass']
})
export class Salary {
    @Output() Clickeref = new EventEmitter();
    Getsaldetailsparents(){
       // debugger;
        alert('hello this is child salary');
        this .Clickeref.emit();
    }

}