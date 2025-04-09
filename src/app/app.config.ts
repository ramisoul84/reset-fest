import { ApplicationConfig, provideZoneChangeDetection,importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { provideHttpClient } from '@angular/common/http';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { register } from 'swiper/element/bundle';
register();

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideLottieOptions({
      player: () => player,
    }),
    provideHttpClient(),
    importProvidersFrom(
      NgxGoogleAnalyticsModule.forRoot('G-VRQKNMGQZ3'), 
      NgxGoogleAnalyticsRouterModule
    )
  ]
};
