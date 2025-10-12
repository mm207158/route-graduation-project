import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // ✅ لازم import
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), // ✅ هنا HttpClient شغال
     provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers

  ],
};
