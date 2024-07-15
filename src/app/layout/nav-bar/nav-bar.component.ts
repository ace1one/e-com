import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { ecomIcons } from '../../components/icons/icons';

@Component({
  selector: 'ecom-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  host:{
    class:'ecom-nav-bar'
  }
})
export class NavBarComponent {
  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerSvgPack('ecom-header', ecomIcons);
  }
}
