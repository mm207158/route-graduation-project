import { Routes } from "@angular/router";

export const Home_Routes: Routes = [
  // 👇 أول ما السيرفر يفتح (يعني المسار فاضي)، يروح لـ /home
 

  { 
    path: 'home', 
    loadComponent: () => import('./pages/home/home').then((c) => c.Home),
    title: 'Home' 
  },
];
