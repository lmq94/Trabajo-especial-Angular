import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-int-register',
  templateUrl: './int-register.component.html',
  styleUrls: ['./int-register.component.scss']
})
export class IntRegisterComponent implements OnInit {

  constructor() {}

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityOut: EventEmitter<number>= new EventEmitter<number>() ;
  

  ngOnInit(): void {
  }

upQuantity():void{
  if(this.quantity < this.max)
      this.quantity++;
      this.quantityOut.emit(this.quantity);
}

downQuantity():void{
  if(this.quantity > 0)
    this.quantity--;
    this.quantityOut.emit(this.quantity);
}





}
