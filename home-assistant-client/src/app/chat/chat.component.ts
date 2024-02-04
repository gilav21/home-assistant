import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {

  prompt: string = '';
  results: { prompt: string, text: string, creationTime: Date }[] = [];
  loading: boolean = false;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.initChat();
  }

  generate() {
    this.loading = true;
    this.chatService.generateToChat(this.prompt).then((res: any) => {
      const matches = [...res.matchAll(new RegExp('```', 'gi'))];
      if (matches.length % 2 == 0) {
        matches.forEach((match, index) => {
          if (index % 2 == 0) {
            res = res.slice(0, match.index) + '<pre>' + res.slice(match.index + 3);
          } else {
            res = res.slice(0, match.index) + '</pre>' + res.slice(match.index + 3);
          }
        });
      }

      this.results.push({ prompt: this.prompt, text: res, creationTime: new Date() });
      this.loading = false;
    });
  }

}
