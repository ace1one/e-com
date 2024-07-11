import { Component } from '@angular/core';
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
export class ProductCardComponent {

  cards=[1,2,3,4,5,6,7,8,9,10,11,12,13]
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerSvgPack('ecom-header', ecomIcons);
  }
}
