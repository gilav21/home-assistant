import { Component } from '@angular/core';
import { RoundButtonComponent } from '../shared/round-button/round-button.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RoundButtonComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

}
