import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
// import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  // if (authService.isAuthenticated()) {

  // authService.isAuthenticated$.subscribe(isAuthenticated =>{
  //   if(isAuthenticated){
  //     console.log('AuthGuard>>> is Authenticated');
  //     return true;
  //   }else{
  //     router.navigate(['login']);
  //     return false;
  //   }
  // });

  return true;

  // if (authService.isAuthenticated$()) {
  //   console.log('AuthGuard>>> is Authenticated');
  //   return true;
  // } else {
  //   router.navigate(['login']);
  //   return false;
  // }
};
