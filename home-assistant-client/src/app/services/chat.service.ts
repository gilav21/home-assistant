import { Injectable } from '@angular/core';
import { ChatSession, GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  generativeAI: GoogleGenerativeAI;
  model: GenerativeModel;
  chat: ChatSession;

  constructor() {
    this.generativeAI = new GoogleGenerativeAI("AIzaSyCbiYYrrFpkeMtBeBySgovX0uVRJbz6W24");
    this.model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });
    this.chat = this.model.startChat();
  }


  initChat(): void {
    this.chat = this.model.startChat();
  }

  async generateSingle(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch(e: any) {
      console.error(e);
      return "Sorry, I'm not able to generate a response at the moment.";
    }
  }

  async generateToChat(prompt: string): Promise<string> {
    try {
      const result = await this.chat.sendMessage(prompt);
      const response = await result.response;
      return response.text();
    } catch(e: any) {
      console.error(e);
      return "Sorry, I'm not able to generate a response at the moment.";
    }
  }

}
