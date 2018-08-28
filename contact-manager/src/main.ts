import { enableProdMode } from '@angular/core'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';  // find out what's app module 
import { environment } from './environments/environment';   

if (environment.production) {
  enableProdMode();
}

//bootstrap == kickstarting with a Module (ie, AppModule) 
// what's AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
