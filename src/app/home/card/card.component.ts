import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() product !: any;

  constructor(private productService : ProductServiceService){}

  addToCartDB(id : number) : void{
    this.productService.pushToCart(id);
  
  }

  changeQuantity({id, quantity} : any) : void{
    console.log(quantity);
    
    this.productService.changeQuantity(id,quantity);
  }



}
