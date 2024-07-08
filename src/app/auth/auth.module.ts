import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NbButtonModule, NbFormFieldModule, NbInputModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { AuthRoutingModule } from './auth-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbButtonModule,
    NbFormFieldModule,
    NbInputModule,
    NbButtonModule,
    ComponentsModule
  ]
})
export class AuthModule { }
