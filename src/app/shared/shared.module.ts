import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLightComponent } from './button-light/button-light.component';
import { ItemQuantityComponent } from './item-quantity/item-quantity.component';




@NgModule({
  declarations: [
   ButtonLightComponent,
   ItemQuantityComponent
  
    
  ],
  imports: [
    CommonModule
  ],
  exports:[ButtonLightComponent, ItemQuantityComponent]
})
export class SharedModule { }
