import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})

export class CardFooterComponent {
@Input() id !: number
@Output() itemToCart = new EventEmitter<number>();

addToCart() : void{  
  this.itemToCart.emit(this.id)
}

}
