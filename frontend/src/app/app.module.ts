import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import ptBr from '@angular/common/locales/pt';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, SharedModule, LoginModule, HomeModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
