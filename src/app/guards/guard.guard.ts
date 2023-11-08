import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if(!true) return false;

  router.navigate(['/login']);
  return true;
};
