import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    SharedModule,
    CartModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
