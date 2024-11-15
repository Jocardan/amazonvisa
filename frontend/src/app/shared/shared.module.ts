import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Services
import { UserService } from './services/user.service';

// Modules
import { PrimengModule } from './modules/primeng.module';

// Components
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  providers: [UserService],
  declarations: [NotFoundComponent, HeaderComponent],
  imports: [
    RouterModule,
    PrimengModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    RouterModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {}
