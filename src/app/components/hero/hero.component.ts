import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  imports: [LottieComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  resetHeroOptions: AnimationOptions = {
    path: 'assets/animations/reset-hero.json',
    loop:true,
  };
}
