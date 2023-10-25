import { Component, inject } from '@angular/core';
import { Product } from 'src/app/Product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent {
  private productService = inject(ProductServiceService)

  cartItemDB: Product[] = [];
  
  readonly cartPrice = this.productService.cartPrice

  constructor() {}

  ngOnInit(): void {
    this.getCartItems()
    this.productService.cartData.subscribe((value : number) => {
      this.getCartItems()
    })
  }

  getCartItems() : void {
    this.cartItemDB = this.productService.getCartItems();
  }
 
  

}
