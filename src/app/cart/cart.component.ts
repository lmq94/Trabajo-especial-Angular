import { Component, OnInit } from '@angular/core';
import { Cookie } from '../cookie-cards/Cookie';
import { CookieCartService } from '../cookie-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Cookie[] = [];

  constructor(private  cart:CookieCartService) { 
    cart.cookieList.subscribe(c => this.cartList = c)
  }

  ngOnInit(): void {
  }

}
