import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbLayoutModule, NbTabsetModule, NbTagModule } from '@nebular/theme';
import { ComponentsModule } from '../components/components.module';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberFormatPipe } from '../pipes/number-format.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';


@NgModule({
  declarations: [HomeComponent, CartComponent,NumberFormatPipe, CheckoutComponent, DeliveryAddressComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentsModule,
    NbLayoutModule,
    NbCheckboxModule,
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule,
    FormsModule,
    NbButtonModule,
    NbAccordionModule,
    NbTabsetModule,
    NbTagModule
  ],
 
})
export class PageModule { }
