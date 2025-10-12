import { RenderMode, ServerRoute } from '@angular/ssr';
import path from 'node:path';

export const serverRoutes: ServerRoute[] = [
  // Ensure all user module routes are server-rendered (fixes 404 on /user/home)

  { path: 'user/product_details/:slug/:id',
    renderMode:RenderMode.Server
   },
  { path: 'user/address/:id',
    renderMode:RenderMode.Server
   },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
