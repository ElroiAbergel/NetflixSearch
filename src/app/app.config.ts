import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Store, provideStore } from '@ngrx/store';
import { userLoginReducer } from './User-login-state-store/user-login-reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from './environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideStore({userLogin:userLoginReducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: environment.production })
]
};
