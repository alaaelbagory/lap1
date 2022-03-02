import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lap1';
  isClicked:boolean=false;
  productsList:any;
  @ViewChild(ProductsComponent) products?:ProductsComponent;

  viewItems(){

    this.products?.renderValues();
    this.productsList=this.products?.productList??[];
    
    if(!this.isClicked)
    this.isClicked=true;
    else
    this.isClicked=false;
    
   
   }

  
}


