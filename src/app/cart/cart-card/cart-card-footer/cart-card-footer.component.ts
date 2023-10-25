import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-card-footer',
  templateUrl: './cart-card-footer.component.html',
  styleUrls: ['./cart-card-footer.component.css']
})
export class CartCardFooterComponent {
  @Output() removeBtnClick = new EventEmitter<number>()

  btnClicked(){
    this.removeBtnClick.emit()
  }
}
