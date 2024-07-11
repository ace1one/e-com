import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecom-product-content',
  templateUrl: './product-content.component.html',
  styleUrl: './product-content.component.scss'
})
export class ProductContentComponent {
@Input('name') titleHeader!:string;
@Input('subname') subtitle!:string;
@Input()
set showButton(value:string | boolean){
  this.showBtn = coerceBooleanProperty(value)
}

get showButton(){
  return this.showBtn;
}


@Input()
set showArrow(value:string | boolean){
  console.log(value)
  this.showArw = coerceBooleanProperty(value)
}

get showArrow(){
  return this.showArw;
}


showBtn:boolean = false;
showArw:boolean = false;
}
