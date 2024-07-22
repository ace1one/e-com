import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbInputModule, NbLayoutModule, NbSelectModule, NbSpinnerModule, NbThemeModule } from '@nebular/theme';
import { AuthRoutingModule } from './auth-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbThemeModule.forRoot({ name: 'custom' }),
    NbLayoutModule,
    NbButtonModule,
    NbFormFieldModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbSelectModule,
    NbSpinnerModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
