import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChatComponent } from './chat/chat.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];
