import { Component, OnInit, inject } from '@angular/core';
import { ProductServiceService } from './services/product-service.service';
import { AuthService } from './services/auth.service';
  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  #productService = inject(ProductServiceService)
  #authService = inject(AuthService)


  constructor(){
}

ngOnInit(): void {
    this.#productService.countItemsInCart()
    this.#productService.getC()
}

}
