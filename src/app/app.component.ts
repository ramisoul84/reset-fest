import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private router: Router,
    private gaService: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    // Track page views
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.gaService.pageView(event.urlAfterRedirects);
      });
  }
}
