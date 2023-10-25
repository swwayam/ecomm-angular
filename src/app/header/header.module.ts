import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkComponent } from './link/link.component';
import { LogoComponent } from './logo/logo.component';
import { IconComponent } from './icon/icon.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    LinkComponent,
    LogoComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[NavbarComponent]
})
export class HeaderModule { }
