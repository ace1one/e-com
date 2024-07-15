import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { NbCardModule, NbCheckboxModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { ComponentsModule } from '../components/components.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [HomeComponent, CartComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentsModule,
    NbLayoutModule,
    NbCheckboxModule,
    NbCardModule,
    NbInputModule
  ],
 
})
export class PageModule { }
