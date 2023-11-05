import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './home/products/products.component';
import { CartComponent } from './cart/cart/cart.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { authGuard } from './guard/auth.guard';
import { homeguardGuard } from './guard/homeguard.guard';

const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'home', component: ProductsComponent},
    {path: 'signin', component: SigninComponent, canActivate: [authGuard] },
    {path: 'signup', component: SignupComponent},
    {path: 'cart', component: CartComponent},
    {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }