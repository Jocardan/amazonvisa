import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserState } from './state/user.state';
import { UserFacade } from './user.facade';
import { userInitializerProvider } from './user.initializer';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { CommonModule } from '@angular/common';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { BenefitsPageComponent } from './pages/benefits-page/benefits-page.component';

@NgModule({
  providers: [UserState, UserFacade, userInitializerProvider],
  declarations: [LoginComponent, UserPageComponent, InfoPageComponent, ReportPageComponent, BenefitsPageComponent],
  imports: [UserRoutingModule, SharedModule, CommonModule],
})
export class UserModule {}
