import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  imports: [LottieComponent,CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  play:boolean=false;
  resetHeroOptions: AnimationOptions = {
    path: 'assets/animations/reset-hero.json',
    loop:true,
  };

  playPause(){
    this.play = !this.play;
    console.log("play")
  }
}
