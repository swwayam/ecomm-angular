import { Component , OnInit, OnDestroy, inject, WritableSignal} from '@angular/core';
import { Links } from '../Links.model';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private productService = inject(ProductServiceService)


  icon : string = "assets/Images/shopping-cart.png"
  logo : string = "assets/Images/brand.png"
  readonly itemCount = this.productService.cartCount

  navbarLinks : Links[] = [
    {
      name: "Sign In",
      url: "signin"
    },
    {
      name: "Orders",
      url: "orders"
    }
  ]

  constructor(){

  }

  
}
