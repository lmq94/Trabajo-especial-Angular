import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cookie } from '../cookie-cards/Cookie';
import { CookieCartService } from '../cookie-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Cookie[] = [];

  @Output()
  resetQuantity: EventEmitter<String>= new EventEmitter<String>() ;
 


  constructor(private  cart:CookieCartService) { 
    this.cart.cookieList.subscribe(c => this.cartList = c);
    console.log(this.cartList);
   
  }

  ngOnInit(): void {
   
 
  }

  priceGruop(prince: number, cant:number): number {
    return prince*cant;
  }

  total(): number {

    let  total: number = 0;
    this.cartList.forEach(cookie => {
      total += (cookie.quantity * cookie.price)
      
    });

    return total;


  }


  emptyCart(): void {
    this.cart.emptyCart();
    this.resetQuantity.emit("Gracias por su compra");
  }


}
