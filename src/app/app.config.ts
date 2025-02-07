import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { profileReducer } from './states/profile.reducer';
import { ProfileEffects } from './states/profile.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({
        profile: profileReducer,
    }),
    provideEffects(ProfileEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
