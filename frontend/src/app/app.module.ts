import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import ptBr from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

registerLocaleData(ptBr);

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [AppRoutingModule,
        SharedModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule], providers: [{ provide: LOCALE_ID, useValue: 'pt' }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
