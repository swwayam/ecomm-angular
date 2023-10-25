import { Component, OnInit , OnDestroy} from '@angular/core';
import { Product } from 'src/app/Product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  productsDB !: Product[]

  constructor(private productService : ProductServiceService){}

  ngOnInit(): void {
      this.productsDB = this.productService.getProducts();
  }

  ngOnDestroy(): void {
      this.productsDB = []
  }
}
