import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HeaderComponent } from 'app/core/header/header.component';
import { HomeGuardService } from 'app/home-guard.service';
import { LoginComponent } from 'app/auth/login/login.component';

const appRoutes: Route[] = [
  { path: '', loadChildren: './chat-window/chat-window.module#ChatWindowModule', canLoad: [HomeGuardService], pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [HomeGuardService] }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    HomeGuardService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
