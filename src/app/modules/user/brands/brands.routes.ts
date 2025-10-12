import { Routes } from '@angular/router';

export const Brands_Routes: Routes = [
  { path: 'brands', loadComponent: () => import('./pages/brands/brands').then((c) => c.Brands),
    data:{
       renderMode: 'prerender'
    }
   },
  {
    path: 'brands-details',

    loadComponent: () =>
      import('./pages/brands-details/brands-details').then((c) => c.BrandsDetails),
   
  },
  
];
