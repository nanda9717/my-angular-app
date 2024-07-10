import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

// Need to import RouterModule for routing

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
