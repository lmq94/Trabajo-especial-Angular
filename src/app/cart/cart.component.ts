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
    this.cart.cookieList.subscribe(c => this.cartList = c);
    console.log(this.cartList);
   
  }

  ngOnInit(): void {
  
    
 
  }

  total(): number{

    let  total: number = 0;
    this.cartList.forEach(beer => {
      total += (beer.quantity * beer.price)
      
    });

    return total;


  }

}
