import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthServService } from './services/auth.service';
export const authenticationGuard: CanActivateFn = (route, state) => {

  const router: Router = inject(Router);
  const auth: AuthServService = inject(AuthServService);
  if (auth.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};









