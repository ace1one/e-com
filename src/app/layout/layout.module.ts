import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PageModule } from '../page/page.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    NavBarComponent,
    TopBarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LayoutRoutingModule,
    NbThemeModule.forRoot({ name: 'custom' }),
    NbLayoutModule,
    NbFormFieldModule,
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule,
    PageModule
    
  ]
})
export class LayoutModule { }
