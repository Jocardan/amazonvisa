import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserState } from './state/user.state';
import { UserFacade } from './user.facade';
import { userInitializerProvider } from './user.initializer';

@NgModule({
  providers: [UserState, UserFacade, userInitializerProvider],
  declarations: [LoginComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
