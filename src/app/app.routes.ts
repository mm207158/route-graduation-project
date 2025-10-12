import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth-guard';



export const routes: Routes = [
  {
    path: '',
    loadChildren:()=>import('./modules/auth/auth.routes').then((m)=>m.Auth_Routes)
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/user/user.routes').then((m) => m.User_Routes),
    canActivate:[authGuard]
  },
  
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found-component/not-found-component').then(
        (c) => c.NotFoundComponent
      ),title:'not found'
  },
];
