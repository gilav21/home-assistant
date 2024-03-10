import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoundButtonComponent } from '../shared/round-button/round-button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, RoundButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
