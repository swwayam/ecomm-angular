import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardImageComponent } from './card/card-image/card-image.component';

@NgModule({
  declarations: [ProductsComponent, CardComponent, CardFooterComponent, CardHeaderComponent, CardImageComponent],
  imports: [CommonModule,  SharedModule],
  exports: [ProductsComponent],
})
export class HomeModule {}
