import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeState } from './state/home.state';
import { HomeFacade } from './home.facade';
import { homeInitializerProvider } from './home.initializer';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  providers: [HomeState, HomeFacade, homeInitializerProvider],
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [HomeRoutingModule, SharedModule, CommonModule],
})
export class HomeModule {}
