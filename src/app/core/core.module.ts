import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule } from '@angular/material';
import { LoginComponent } from 'app/auth/login/login.component';
import { HeaderComponent } from 'app/core/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
