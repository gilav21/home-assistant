import { Component, input } from '@angular/core';

@Component({
  selector: 'app-round-button',
  standalone: true,
  imports: [],
  templateUrl: './round-button.component.html',
  styleUrl: './round-button.component.scss'
})
export class RoundButtonComponent {
    text = input.required<string>();
    disabled = input.required<boolean>();
    color = input.required<string>();
    fontColor = input<string>();
}
