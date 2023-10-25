import { Component, OnInit, inject } from '@angular/core';
import { ProductServiceService } from './services/product-service.service';
  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private productService = inject(ProductServiceService)
  constructor(){
}

ngOnInit(): void {
    this.productService.countItemsInCart()
}
}
