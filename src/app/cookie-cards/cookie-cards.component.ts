import { Component, OnInit } from '@angular/core';
import { Cookie } from './Cookie';

@Component({
  selector: 'app-cookie-cards',
  templateUrl: './cookie-cards.component.html',
  styleUrls: ['./cookie-cards.component.scss']
})
export class CookieCardsComponent implements OnInit {



  constructor() { 

    cookies: Cookie[] = [
      { name: 'Don Satur',
        type: 'Agridulce',
        price: 180,
        stock: 10,
        image:String;

      }

    ]

  }

  ngOnInit(): void {
  }

}
