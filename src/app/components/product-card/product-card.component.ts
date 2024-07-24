import { Component, ElementRef, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { ecomIcons } from '../icons/icons';

@Component({
  selector: 'ecom-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  host:{
    class:'product-card'
  }
})
export class ProductCardComponent implements OnChanges, OnInit {
@ViewChild('projectedContent') projectedContent!:ElementRef
@Input() hasArrow!:boolean;
@Input() 
set arrowSide(value:string){
  console.log(value)
  this.arrowPosition = value
}

get arrowSide(){
  return this.arrowPosition;
}
arrowPosition:string = ''
  cards=[1,2,3,4,5,6,7,8,9,10,11,12,13]
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerSvgPack('ecom-header', ecomIcons);
  }

  ngOnInit(): void {
    if(this.arrowPosition === 'right'){
      this.projectedContent.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    }else{
      this.projectedContent.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

ngOnChanges(changes: SimpleChanges): void {
  console.log(this.arrowPosition);
  console.log(this.projectedContent)
  if(this.arrowPosition === 'right'){
    this.projectedContent.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }else{
    this.projectedContent.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }
}

  
}
