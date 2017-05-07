import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HeaderComponent } from 'app/core/header/header.component';
import { ChatWindowComponent } from 'app/chat-window/chat-window.component';

const chatWindowRoutes: Route[] = [
  { path: '', component: ChatWindowComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chatWindowRoutes)
  ],
  exports: [RouterModule]
})
export class ChatWindowRoutingModule { }
