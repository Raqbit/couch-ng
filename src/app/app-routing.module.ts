import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'app/core/header/header.component';
import { LoginGuardService } from 'app/login-guard.service';
import { LoginComponent } from 'app/auth/login/login.component';
import { RouterModule, Route } from '@angular/router';

const appRoutes: Route[] = [
  { path: '', loadChildren: './chat-window/chat-window.module#ChatWindowModule', canLoad: [LoginGuardService], pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsModule', canLoad: [LoginGuardService], pathMatch: 'full' },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  providers: [
    LoginGuardService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
