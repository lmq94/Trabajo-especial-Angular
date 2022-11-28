import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cookie } from './cookie-cards/Cookie';


const URL= 'https://62b72202491a19c97aef16bc.mockapi.io/Cookie';

@Injectable({
  providedIn: 'root'
})
export class CookieDataService {

  constructor(private http: HttpClient) { 
    
  }


  getAll():Observable<Cookie[]>{
    return this.http.get<Cookie[]>(URL).pipe(tap((cookies:Cookie[]) => cookies.forEach(cookie => cookie.quantity = 0)));
  }

}
