import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [RouterLink, RouterOutlet, RouterLink],
  standalone: true,
})
export class App {
  protected readonly title = signal('enset-app');
}
