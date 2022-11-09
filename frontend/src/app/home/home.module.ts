import { NgModule } from '@angular/core';

import { UserTableComponent } from './pages/user-table/user-table.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreatePartnerComponent } from './pages/create-partner/create-partner.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeState } from './state/home.state';
import { HomeFacade } from './home.facade';
import { homeInitializerProvider } from './home.initializer';

@NgModule({
  providers: [HomeState, HomeFacade, homeInitializerProvider],
  declarations: [
    UserTableComponent,
    CreatePartnerComponent,
    CreateUserComponent,
  ],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
