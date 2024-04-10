import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { counterReducer } from './state/counter/counter.reducer';
import { productReducer } from './state/product/product.reducer';
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideAnimationsAsync(),
        provideStore({counter: counterReducer, products: productReducer, userState: userReducer}),
        provideEffects([UserEffects]),
        provideRouterStore(),
        provideEntityData(entityConfig, withEffects()),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
        provideHttpClient(withFetch())]
};
