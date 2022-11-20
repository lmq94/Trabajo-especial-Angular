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
      image: 'assets/img/DonSatur-Agridulce.jpg'
    },

    { name: 'Don Satur',
      type: 'Negritas',
      price: 180,
      stock: 10,
      image: 'assets/img/DonSatur-Negritas.jpg'
    },

    { name: 'Don Satur',
      type: 'Salado',
      price: 180,
      stock: 10,
      image: 'assets/img/DonSatur-Salado.jpg'
    },

    
    

    

  ]


  constructor() { 

    

  }

  ngOnInit(): void {
  }

}
