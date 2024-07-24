import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'ecom-product-content',
  templateUrl: './product-content.component.html',
  styleUrl: './product-content.component.scss'
})
export class ProductContentComponent implements OnChanges,AfterContentInit {
  @ContentChild('projectedContent', { static: false }) projectedContent!: ElementRef;
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
@Output() isArrow = new EventEmitter()
@Output() arrowClicked = new EventEmitter()

showBtn:boolean = false;
showArw:boolean = false;


ngOnChanges(changes: SimpleChanges): void {
  if(this.showArw){
    this.isArrow.emit(true)
  }else{
    this.isArrow.emit(false)
  }
 console.log(this.showArrow)
}

onClickArrow(event:string){
  this.arrowSide = event
  if(this.arrowSide === 'right'){
    this.arrowClicked.emit(event)
    // console.log(this.projectedContent)
    // this.projectedContent.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }else{
    //this.projectedContent.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }
 // this.arrowClicked.emit(event)
}

ngAfterContentInit(): void {
//  this.onClickArrow()
console.log(this.projectedContent)
}

arrowSide:string = ''

}
