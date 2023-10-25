import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.css']
})
export class ItemQuantityComponent {
  @Input() quantity !: number ;
  @Input() availableQuantity !: number;
  @Input() id !: number;

  @Output() changeInQuantity = new EventEmitter<{id: number, quantity: number}>()

  add(){
    if(this.quantity < this.availableQuantity){
      this.quantity++;
      this.changeInQuantity.emit({id: this.id, quantity: this.quantity})
    }
  }

  sub(){
    if(this.quantity > 1){
      this.quantity--;
      this.changeInQuantity.emit({id: this.id, quantity: this.quantity})
    }
  }
}

