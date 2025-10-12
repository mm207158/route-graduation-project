import { Routes } from '@angular/router';
import { AuthLayout } from '../../layouts/auth-layout/auth-layout';

export const Auth_Routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
     { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then((c) => c.Register),
        title: 'Register',
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then((c) => c.Login),
        title: 'Login',
      },
      {
        path: 'forget-password',
        loadComponent: () =>
          import('./pages/forget-password/forget-password').then((c) => c.ForgetPassword),
        title: 'Forget Password',
      },
      {
        path: 'verifiaction',
        loadComponent: () =>
          import('./pages/verify-component/verify-component').then((c) => c.VerifyComponent),
        title: 'verifiaction',
      },
    ],
  },
];
