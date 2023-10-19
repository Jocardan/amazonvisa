import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { BenefitsPageComponent } from './pages/benefits-page/benefits-page.component';

const routes: Routes = [
  { path: 'info', component: InfoPageComponent },
  { path: 'report', component: ReportPageComponent },
  { path: 'benefits', component: BenefitsPageComponent },
  { path: '', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
