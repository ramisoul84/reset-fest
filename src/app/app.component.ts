import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalyticsService } from './_services/analytic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reset-fest';
  constructor(private analytics: AnalyticsService) {
    this.analytics.initialize(); // Start tracking
  }
}
