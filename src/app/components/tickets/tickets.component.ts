import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-tickets',
  imports: [RouterLink,LottieComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
    ticketsOptions: AnimationOptions = {
      path: 'assets/animations/tickets.json',
      loop:true,
    };
}
