import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimengModule,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    ShowRoutesComponent,
  ],
})
export class SharedModule {}
