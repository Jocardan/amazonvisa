import { NgModule } from '@angular/core';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { PanelModule } from 'primeng/panel';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  providers: [],
  declarations: [],
  imports: [
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
    CheckboxModule,
    ChipsModule,
    AutoCompleteModule,
    TableModule,
    PanelModule,
    SkeletonModule,
  ],
  exports: [
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
    CheckboxModule,
    ChipsModule,
    AutoCompleteModule,
    TableModule,
    PanelModule,
    SkeletonModule,
  ],
})
export class PrimengModule {}
