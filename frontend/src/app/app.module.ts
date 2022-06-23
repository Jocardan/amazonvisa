import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { CreateUserComponent } from './pages/create-user/create-user.component';

import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { CreatePartnerComponent } from './pages/create-partner/create-partner.component';
import { ShowRoutesComponent } from './components/show-routes/show-routes.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CreateUserComponent,
    CreatePartnerComponent,
    ShowRoutesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AutoCompleteModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    DialogModule,
    DividerModule,
    CalendarModule,
    InputMaskModule,
    InputTextareaModule,
    KeyFilterModule,
    DropdownModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
