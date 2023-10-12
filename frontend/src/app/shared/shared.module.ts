import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services
import { UserService } from './services/user.service';

// Modules
import { PrimengModule } from './modules/primeng.module';

// Components
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowRoutesComponent } from './components/show-routes/show-routes.component';

@NgModule({
  providers: [UserService],
  declarations: [NotFoundComponent, ShowRoutesComponent],
  imports: [
    RouterModule,
    PrimengModule,
  ],
  exports: [
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    ShowRoutesComponent,
  ],
})
export class SharedModule {}
