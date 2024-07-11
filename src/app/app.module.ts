import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbButton, NbButtonModule, NbIconModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { ComponentsModule } from './components/components.module';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PageModule } from './page/page.module';
import { LayoutModule } from './layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
 
    NbThemeModule.forRoot({ name: 'custom' }),
    NbEvaIconsModule,
    NbLayoutModule,
    NbButtonModule,

    NbIconModule,
    LayoutModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
