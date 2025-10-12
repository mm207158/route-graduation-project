import { Routes } from '@angular/router';


export const routes: Routes = [
  // 👇 الجزء الخاص بالـ auth
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.routes').then((m) => m.Auth_Routes),
  },

  // 👇 الجزء الخاص بالـ user بعد تسجيل الدخول
  {
    path: '',
    loadChildren: () =>
      import('./modules/user/user.routes').then((m) => m.User_Routes),
   
  },

  // 👇 عشان أي مسار مش معروف يروح للّوجين
  {
    path: '**',
    redirectTo: 'login',
  },
];
