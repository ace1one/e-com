import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NbActionsModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';




@NgModule({
  declarations: [
    TopBarComponent,
    NavBarComponent,
    FormWrapperComponent
  ],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'custom' }),
    NbLayoutModule,
    NbActionsModule,
    NbIconModule,
    NbFormFieldModule,
    NbInputModule
  ],
  exports:[
    TopBarComponent,
    NavBarComponent,
    NbIconModule,
    FormWrapperComponent
  ]
})
export class ComponentsModule { }
