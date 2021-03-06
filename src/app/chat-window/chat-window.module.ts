import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './chat-window.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatComponent } from './chat/chat.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';
import { ChatWindowRoutingModule } from 'app/chat-window/chat-window-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChatWindowRoutingModule
  ],
  declarations: [
    ChatWindowComponent,
    ChatInputComponent,
    ChatComponent,
    ChatMessageComponent
  ]
})
export class ChatWindowModule { }
