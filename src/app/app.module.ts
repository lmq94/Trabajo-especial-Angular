import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieCardsComponent } from './cookie-cards/cookie-cards.component';
import { IntCalculatorComponent } from './int-calculator/int-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    CookieCardsComponent,
    IntCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
