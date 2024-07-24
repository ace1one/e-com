import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CanActivateFn } from '@angular/router';

// Define the functional guard
export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);


  if (authService.isAuthenticated()) {
   
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};