import { Component, OnInit } from '@angular/core';
import { Cookie } from './Cookie';

@Component({
  selector: 'app-cookie-cards',
  templateUrl: './cookie-cards.component.html',
  styleUrls: ['./cookie-cards.component.scss']
})
export class CookieCardsComponent implements OnInit {

  cookies: Cookie[] = [
    { name: 'Don Satur',
      type: 'Agridulce',
      price: 180,
      stock: 10,
      image: 'assets/img/DonSatur-Agridulce.jpg',
      quantity: 0
    },

    { name: 'Don Satur',
      type: 'Negritas',
      price: 180,
      stock: 10,
      image: 'assets/img/DonSatur-Negritas.jpg',
      quantity: 0
    },

    { name: 'Don Satur',
      type: 'Salado',
      price: 180,
      stock: 0,
      image: 'assets/img/DonSatur-Salado.jpg',
      quantity: 0
    },

    
    

    

  ]


  constructor() { 

    

  }

  ngOnInit(): void {
  }

}
