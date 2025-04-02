import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  imports: [LottieComponent,CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{
  isPlaying:boolean=false;
  firstEntrence:boolean = false;
  @ViewChild('heroImgWrapper') heroImgWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('videoHero') videoHero!: ElementRef<HTMLVideoElement>;
  resetHeroOptions: AnimationOptions = {
    path: 'assets/animations/reset-hero.json',
    loop:false,
  };
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }



  setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.firstEntrence) {
          console.log("enter", entry.intersectionRatio);
          this.firstEntrence = true;
          this.autoPlay();
        }
      });
    }, { threshold: 0.5 });
  
    if (this.heroImgWrapper?.nativeElement) {
      this.observer.observe(this.heroImgWrapper.nativeElement);
    } else {
      console.error('heroImgWrapper element not found!'); // Debug log
    }
  }

  autoPlay(){
  
    setTimeout(() => {
      this.isPlaying = true;
    
    }, 6000);
  }

  playPause() {
  this.isPlaying = !this.isPlaying;
  }
}
