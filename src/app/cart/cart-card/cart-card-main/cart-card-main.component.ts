import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-card-main',
  templateUrl: './cart-card-main.component.html',
  styleUrls: ['./cart-card-main.component.css']
})
export class CartCardMainComponent {
@Input() image !: string;
}
