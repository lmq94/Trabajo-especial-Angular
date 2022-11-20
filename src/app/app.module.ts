import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieCardsComponent } from './cookie-cards/cookie-cards.component';
import { FormsModule } from '@angular/forms';
import { IntRegisterComponent } from './int-register/int-register.component';


@NgModule({
  declarations: [
    AppComponent,
    CookieCardsComponent,
    IntRegisterComponent,
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
