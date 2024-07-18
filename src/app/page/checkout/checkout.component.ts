import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { ecomIcons } from '../../components/icons/icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  visitedTabs = [true, false, false];
  constructor(private iconLibraries: NbIconLibraries,) {
    this.iconLibraries.registerSvgPack('ecom-header', ecomIcons);
    }

    tabs = [
      { title: 'Cart', icon: 'shopping-cart-outline', visited: true },
      { title: 'Delivery Address', icon: 'car-outline', visited: false },
      { title: 'Payment', icon: 'credit-card-outline', visited: false }
    ];
  
    onTabChange(event:any) {
     
    }

}
