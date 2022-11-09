import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePartnerComponent } from './pages/create-partner/create-partner.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'create-partner', component: CreatePartnerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
