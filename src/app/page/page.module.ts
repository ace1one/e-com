import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { ComponentsModule } from '../components/components.module';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberFormatPipe } from '../pipes/number-format.pipe';


@NgModule({
  declarations: [HomeComponent, CartComponent,NumberFormatPipe],
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
    NbButtonModule

  ],
 
})
export class PageModule { }
