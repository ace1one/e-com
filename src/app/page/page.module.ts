import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { NbLayoutModule } from '@nebular/theme';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentsModule
  ],
 
})
export class PageModule { }
