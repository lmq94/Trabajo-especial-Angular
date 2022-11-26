import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieCardsComponent } from './cookie-cards/cookie-cards.component';
import { IntCalculatorComponent } from './int-calculator/int-calculator.component';
import { FormsModule } from '@angular/forms';
import { CookieAboutComponent } from './cookie-about/cookie-about.component';



@NgModule({
  declarations: [
    AppComponent,
    CookieCardsComponent,
    IntCalculatorComponent,
    CookieAboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
