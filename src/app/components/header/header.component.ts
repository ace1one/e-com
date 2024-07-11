import { Component, Input } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { ecomHeaderIcons } from './header.icon';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'ecom-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host:{
    class:'header'
  }
})
export class HeaderComponent {
@Input('name') titleHeader!:string;
@Input('subname') subtitle!:string;
@Input()
set showButton(value:string | boolean){
  this.showBtn = coerceBooleanProperty(value)
}

get showButton(){
  return this.showBtn;
}

set showArrow(value:string | boolean){
  this.showArw = coerceBooleanProperty(value)
}

get showArrow(){
  return this.showArw;
}


showBtn:boolean = false;
showArw:boolean = false;
constructor(private iconLibraries: NbIconLibraries) {
  this.iconLibraries.registerSvgPack('ecom-header', ecomHeaderIcons);
}

}
