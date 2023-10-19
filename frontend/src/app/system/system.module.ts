import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreatePartnerComponent } from './pages/create-partner/create-partner.component';
import { SystemApi } from './api/system.api';
import { systemInitializerProvider } from './system.initializer';
import { SystemFacade } from './system.facade';
import { SystemState } from './state/system.state';
import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  providers: [
    SystemApi,
    systemInitializerProvider,
    SystemFacade,
    SystemState
  ],
  declarations: [
    UserTableComponent,
    CreateUserComponent,
    CreatePartnerComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ]
})
export class SystemModule { }
