import { Injectable } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TrackingService {
  constructor(
    private gaService: GoogleAnalyticsService,
    private router: Router
  ) {}

  initialize() {
    this.trackPageViews();
  }

  private trackPageViews() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.gaService.pageView(event.urlAfterRedirects);
      });
  }

  trackEvent(category: string, action: string, label?: string, value?: number) {
    this.gaService.event(action, category, label, value);
  }
}