import { Injectable } from '@angular/core';
import { DiscountOffers } from '../shared classes/Discount';
import { IProduct } from '../shared classes/IProductsInterface';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

 ProductList:Array<IProduct>=[
  {Id:1,name:"samsung",quentity:12,price:200,pres:DiscountOffers.pres_10},
  {Id:2,name:"dress",quentity:12,price:200,pres:DiscountOffers.pres_10},
  {Id:3,name:"ring",quentity:12,price:200,pres:DiscountOffers.pres_10}
  ];


GetAllProducts()
{
return this.ProductList
}

ProductListID!:any;

GetProductById(id:any) {

if(typeof id  != 'number')
{
  return null;
}
else{
  this.ProductList.filter((p)=>{
    if(p.Id===id){
     this.ProductListID=p;
    }
    
  });
  return this.ProductListID;


}
}
}

