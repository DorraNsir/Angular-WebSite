import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import{ArticleService} from './service/article.service'
import { provideHttpClient } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ArticleService,
    provideHttpClient()
  ]
};

