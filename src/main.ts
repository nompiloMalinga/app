import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

const appConfig = {
  providers: [
    provideHttpClient()
  ]
};

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
