import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-int-calculator',
  templateUrl: './int-calculator.component.html',
  styleUrls: ['./int-calculator.component.scss']
})
export class IntCalculatorComponent implements OnInit {

  constructor() { }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number>= new EventEmitter<number>() ;

  @Output()
  maxReached: EventEmitter<String>= new EventEmitter<String>() ;
  

  ngOnInit(): void {
  }

upQuantity():void{
  if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
  }
  else{
      this.maxReached.emit("No se puede sumar mas")
  }

}

changeQuantity(event: KeyboardEvent): void{
  console.log(event.key);
  this.quantityChange.emit(this.quantity);
}

downQuantity():void{
  if(this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
}

}
