import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../shared classes/Discount';
import { ICategory } from '../shared classes/ICategoryInterface';
import { IProduct } from '../shared classes/IProductsInterface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  storName:string;
  StoreLogo:string;
   ProductList:Array<IProduct>=[];
   CategoryList:Array<ICategory>=[];
  NoDiscount=DiscountOffers.pres_10;
  ClientName:string="";
  IsPurshased:boolean=false;


   p1:IProduct={Id:1,name:"samsung",quentity:12,price:200,img:"image/1.jpg"};
   c1:ICategory={id:2,name:"smartphones"};



  constructor(){

     this.NoDiscount= DiscountOffers.pres_15;
     this.storName="Hopla";
     this.ProductList.push(this.p1);
     this.CategoryList.push(this.c1);
     this.StoreLogo="image/1.jpg";
     this.ClientName="Alaa Gehad";
   }
  ngOnInit(): void {
  }

}
