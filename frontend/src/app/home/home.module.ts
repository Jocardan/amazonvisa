import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreatePartnerComponent } from './pages/create-partner/create-partner.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeState } from './state/home.state';
import { HomeFacade } from './home.facade';
import { homeInitializerProvider } from './home.initializer';

@NgModule({
  providers: [HomeState, HomeFacade, homeInitializerProvider],
  declarations: [HomeComponent, CreatePartnerComponent, CreateUserComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
