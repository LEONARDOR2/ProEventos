import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  ...appConfig,          // mantém as configurações existentes
  providers: [
    ...(appConfig.providers || []), // preserva outros providers
    provideHttpClient()              // adiciona HttpClient
  ]
}).catch(err => console.error(err));
