import { Component, OnInit,  } from '@angular/core';
import { CookieDataService } from '../cookie--data.service';
import { CookieCartService } from '../cookie-cart.service';
import { Cookie } from './Cookie';

@Component({
  selector: 'app-cookie-cards',
  templateUrl: './cookie-cards.component.html',
  styleUrls: ['./cookie-cards.component.scss']
})
export class CookieCardsComponent implements OnInit {

  cookies: Cookie[] = []


  constructor(private  cart:CookieCartService, private cookieData:CookieDataService ) {
   
   }



  addCart(cookie:Cookie):void{
    this.cart.addCart(cookie);
    cookie.stock -= cookie.quantity;
  }



  ngOnInit(): void {
    this.cookieData.getAll().subscribe(cookies => this.cookies = cookies)

  }

  maxReached(m: String): void{
    alert(m);
  }

}
