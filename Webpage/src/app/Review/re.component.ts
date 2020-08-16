import { Component, Input } from '@angular/core';
@Component({
    selector: 'child',
    templateUrl: './re.component.html',
})



export class Review{
    @Input() AllReview: any

}