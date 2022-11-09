import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { CreatePartnerComponent } from './pages/create-partner/create-partner.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  providers: [],
  declarations: [HomeComponent, CreatePartnerComponent, CreateUserComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
