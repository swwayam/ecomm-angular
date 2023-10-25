import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';

import { CartCardComponent } from './cart-card/cart-card.component';
import { CartCardMainComponent } from './cart-card/cart-card-main/cart-card-main.component';
import { CartCardHeaderComponent } from './cart-card/cart-card-header/cart-card-header.component';
import { CartCardFooterComponent } from './cart-card/cart-card-footer/cart-card-footer.component';
import { SharedModule } from '../shared/shared.module';
import { CartTotalComponent } from './cart-total/cart-total.component';

@NgModule({
  declarations: [
    CartComponent,
    CartCardComponent,
    CartCardMainComponent,
    CartCardHeaderComponent,
    CartCardFooterComponent,

    CartTotalComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [CartComponent],
})
export class CartModule {}
