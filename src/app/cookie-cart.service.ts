import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cookie } from './cookie-cards/Cookie';

@Injectable({
  providedIn: 'root'
})
export class CookieCartService {

  _cookieList: Cookie[] = [];
  cookieList: BehaviorSubject<Cookie[]> = new BehaviorSubject(this._cookieList);
  
  public cookies: Observable<Cookie[]> = this.cookieList.asObservable();



  addCart(cookie:Cookie){
    let item = this._cookieList.find(c => c.name === cookie.name && c.type == cookie.type);
    if(!item){
      this._cookieList.push({...cookie});
    }
    else{
   
        item.quantity += cookie.quantity;
   
    }
    
  }

  
  empty(): boolean{
    return this._cookieList.length == 0;

  }

  emptyCart(): void{
    this._cookieList.splice(0, this._cookieList.length);
  }



  


}


