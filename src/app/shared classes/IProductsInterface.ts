import { DiscountOffers } from './Discount';
export interface IProduct{
    Id:number;
    name:string;
    quentity:number;
    price:number;

    pres:DiscountOffers
}