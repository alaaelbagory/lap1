import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
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
  Discount=DiscountOffers.pres_10;
  no=DiscountOffers.Nodis;
  ClientName:any="";
  IsPurshased:boolean=true;
  CategorySelected:string="";

  ProductList:Array<IProduct>=[
    {Id:1,name:"samsung",quentity:12,price:200,pres:DiscountOffers.pres_10},
    {Id:2,name:"dress",quentity:12,price:200,pres:DiscountOffers.pres_10},
    {Id:3,name:"ring",quentity:12,price:200,pres:DiscountOffers.pres_10}
    ];

  CategoryList:Array<ICategory>=[
     {id:1,name:"smartphones"},
     {id:2,name:"clotheses"},
     {id:3,name:"acsesories"}
    ];
 

  // oneProduct:Array<IProduct>=[
  //   {Id:1,name:"samsung",quentity:12,price:200, pres:DiscountOffers.pres_10},
   
   
  // ];


  isPurchasedChange()
  {
      if(this.IsPurshased==false){
        this.IsPurshased=true;
      }
  }


  constructor(private productService:ProductServiceService){

     this.Discount= DiscountOffers.pres_15;
     this.storName="Hopla";
    //  this.ProductList.push(this.p1);
    //  this.CategoryList.push(this.c1);
     this.StoreLogo="image/1.jpg";
     //this.ClientName="Alaa Gehad";
   }
  
   productList:any;  
   ProductID:any;  
  ngOnInit(): void {
    this.productList=this.productService.GetAllProducts();
    this.ProductID=this.productService.GetProductById(2);

  }

  renderValues(){
    return this.productList=this.productService.GetAllProducts();
  }

}










  