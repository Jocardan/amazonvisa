import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
