import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  console.log(authService.isLoggedIn(), "from guard");
  
  
  if(authService.isLoggedIn()){
    return router.createUrlTree([''])
  }else{
    return true
  }
};
