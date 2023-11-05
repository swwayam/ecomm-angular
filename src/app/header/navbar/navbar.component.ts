import { Component , 
inject} from '@angular/core';
import { Links } from '../Links.model';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  #productService = inject(ProductServiceService)


  icon : string = "assets/Images/shopping-cart.png"
  logo : string = "assets/Images/brand.png"

  isLoggedIn : boolean = this.authService.isLoggedIn()

  readonly itemCount = this.#productService.cartCount

  constructor(  private authService : AuthService){}

  logout() : void{
    this.authService.logout()
  }

  
}
