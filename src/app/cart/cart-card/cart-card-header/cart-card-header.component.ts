import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-card-header',
  templateUrl: './cart-card-header.component.html',
  styleUrls: ['./cart-card-header.component.css']
})
export class CartCardHeaderComponent {
  @Input() title !: string;
  @Input() ratings !: number[];
}
