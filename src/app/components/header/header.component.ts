import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { ecomHeaderIcons } from './header.icon';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ecomIcons } from '../icons/icons';

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
  console.log(value)
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

@Output() clickArrow = new EventEmitter() 


showBtn:boolean = false;
showArw:boolean = false;
constructor(private iconLibraries: NbIconLibraries) {
  this.iconLibraries.registerSvgPack('ecom-header', ecomIcons);
}

onClickArrow(prop:string){
  this.clickArrow.emit(prop)
}



}
