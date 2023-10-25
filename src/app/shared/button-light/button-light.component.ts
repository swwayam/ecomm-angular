import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-light',
  templateUrl: './button-light.component.html',
  styleUrls: ['./button-light.component.css']
})
export class ButtonLightComponent {
@Input() name !: string 
@Output() btnClick = new EventEmitter<boolean>()


onClick() : void {
  this.btnClick.emit();
}

}
