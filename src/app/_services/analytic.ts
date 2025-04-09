import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function; // Declare gtag for TypeScript

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(private router: Router) {}

  /**
   * Initialize Google Analytics
   */
  initialize() {
    this.trackPageViews(); // Track route changes
  }

  /**
   * Track page views on route changes
   */
  private trackPageViews() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-VRQKNMGQZ3', {
          page_path: event.urlAfterRedirects,
          page_title: document.title
        });
      }
    });
  }

  /**
   * Track custom events (button clicks, form submissions, etc.)
   * @param eventName - e.g., 'click', 'form_submit'
   * @param params - { event_category, event_label, value }
   */
  trackEvent(
    eventName: string,
    params: { 
      event_category?: string,
      event_label?: string,
      value?: number 
    }
  ) {
    gtag('event', eventName, params);
  }
}