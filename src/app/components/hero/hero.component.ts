import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  imports: [LottieComponent,CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @ViewChild('videoHero') videoHero!: ElementRef<HTMLVideoElement>;
  play:boolean=false;
  resetHeroOptions: AnimationOptions = {
    path: 'assets/animations/reset-hero.json',
    loop:true,
  };

  playPause(){
    this.play = !this.play;
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const hero= document.getElementById('hero-img');
    const heroPosition = hero!.getBoundingClientRect().top;
    if (heroPosition < 0 && !this.play) {
      setTimeout(() => {
        this.play = true;
      }, 5000); 
   
    } 

}

/*
playVideo() {
  const video = this.videoHero.nativeElement;
  setTimeout(() => {
    this.play = true;
    video.play();
  }, 5000); 
}
*/
}
