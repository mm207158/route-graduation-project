import { Routes } from '@angular/router';

export const Order_Routes: Routes = [
  {
    path: 'address/:id',
    loadComponent: () => import('./pages/address/address').then((c) => c.Address),
    title: 'Address',
  },
  {
    path: 'allorders',
    loadComponent: () => import('./pages/order-component/order-component').then((c) => c.OrderComponent),
    title: 'Address',
  },
];
