import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CookieCardsComponent} from './cookie-cards/cookie-cards.component';
import {CookieAboutComponent} from './cookie-about/cookie-about.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{
    path: '',
    redirectTo: 'cookies',
    pathMatch: 'full'
}, 

{
  path: 'cookies',
  component: CookieCardsComponent,
},

{
  path: 'about',
  component: CookieAboutComponent,
},

{
  path: 'cart',
  component: CartComponent,
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
