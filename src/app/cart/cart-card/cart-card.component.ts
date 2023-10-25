import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {
  @Input() product !: Product;

  constructor(private productService: ProductServiceService){}

  changeQuantity({id, quantity} : any) : void{
    this.productService.changeQuantity(id,quantity);
  }

  removeItemFromCart(){
    this.productService.removeCartItems(this.product.id)
  }
}
