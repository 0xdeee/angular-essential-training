import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/**
 * (1)
 * The starting point of angular app
 * Every angular app starts by bootstrapping an module in to the view
 * here we are focusing on browser so using platformBrowserDynamic() to bootstrap out AppModule
 */
platformBrowserDynamic().bootstrapModule(AppModule);
