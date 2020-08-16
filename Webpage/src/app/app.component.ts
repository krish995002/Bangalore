import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Webpage creation';
  ProductName:string='Amezon';
  ProductDescription:string='the product too good';
  ProductCost:number=5000;
  ProductReview =[
    {name:'krishna',review:'this was useing last one year.....'},
    {name:'vimal',review:'this was useing last one year.....'}
  ];
}
