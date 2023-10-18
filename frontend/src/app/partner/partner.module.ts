import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerFacade } from './partner.facade';
import { partnerState } from './state/partner.state';
import { partnerInitializerProvider } from './partner.initializer';
import { SharedModule } from 'primeng/api';
import { PartnerRoutingModule } from './partner-routing.module';



@NgModule({
  providers: [
    partnerState,
    PartnerFacade,
    partnerInitializerProvider
  ],
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PartnerRoutingModule
  ]
})
export class PartnerModule { }
