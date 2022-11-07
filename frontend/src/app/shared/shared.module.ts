import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services
import { UserServiceService } from './services/user-service.service';

// Modules
import { PrimengModule } from './modules/primeng.module';

// Components
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  providers: [UserServiceService],
  declarations: [NotFoundComponent],
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
  ],
})
export class SharedModule {}
