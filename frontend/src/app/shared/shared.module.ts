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
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [UserService],
  declarations: [NotFoundComponent, ShowRoutesComponent, HeaderComponent],
  imports: [
    RouterModule,
    PrimengModule,
    CommonModule
  ],
  exports: [
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    ShowRoutesComponent,
    HeaderComponent
  ],
})
export class SharedModule {}
