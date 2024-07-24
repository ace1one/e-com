import { APP_INITIALIZER, inject, NgModule } from '@angular/core';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthService } from './services/auth/auth.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
export function appInitializer(authService: AuthService) {
  const router = inject(Router);
  return () => {
    return new Promise<void>((resolve, reject) => {
      authService.getUserByToken().pipe(
        finalize(() => resolve()) 
      ).subscribe({
        error: (err) => {
          router.navigate(['/auth/login']);
        }
      });
    });
  };
}

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
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
