import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePartnerComponent } from './pages/create-partner/create-partner.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-user', component: UserTableComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'create-partner', component: CreatePartnerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
