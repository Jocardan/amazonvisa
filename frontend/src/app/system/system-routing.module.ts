import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePartnerComponent } from './pages/create-partner/create-partner.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UserTableComponent } from './pages/user-table/user-table.component';

const routes: Routes = [
  { path: '', component: UserTableComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'create-partner', component: CreatePartnerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}

