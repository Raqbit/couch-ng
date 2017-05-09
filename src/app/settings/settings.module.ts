import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { MdCardModule } from '@angular/material';

const settingsRoutes: Routes = [
  { path: '', component: SettingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(settingsRoutes),
    MdCardModule
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule { }
