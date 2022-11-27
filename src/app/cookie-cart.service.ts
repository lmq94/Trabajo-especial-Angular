import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cookie } from './cookie-cards/Cookie';

@Injectable({
  providedIn: 'root'
})
export class CookieCartService {

  _cookieList: Cookie[] = [];
  cookieList: BehaviorSubject<Cookie[]> = new BehaviorSubject(this._cookieList);


  addCart(cookie:Cookie){
    let cosa: Cookie = this._cookieList.find((v1) => v1.name == cookie.name);
    if(!cosa){
      this._cookieList.push({...cookie});
    }
    else{
      cosa.quantity += cookie.quantity;
    }
    this.cookieList.next(this._cookieList);
    
  }


}
