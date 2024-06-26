import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// ...
export const appConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes), // Providing the routes to the Angular router
        // ...
    ]
};
//# sourceMappingURL=app.config.js.map