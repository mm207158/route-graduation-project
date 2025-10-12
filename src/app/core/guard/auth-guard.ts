import { CanActivateFn } from '@angular/router';
import { AuthServices } from '../../modules/auth/services/auth-services';
import { inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const authServices=inject(AuthServices);
  if(authServices.isLoggedIn()){
    return true
  }else
  return false
 

};