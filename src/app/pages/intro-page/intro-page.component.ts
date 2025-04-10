import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-intro-page',
  imports: [CommonModule,RouterLink,LottieComponent],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.css'
})
export class IntroPageComponent implements AfterViewInit {
  videoLoaded = false;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  showResetLoop = false;
  resetInOptions: AnimationOptions = {
    path: 'assets/animations/reset-in.json',
    loop:false,
  };
  resetLoopOptions: AnimationOptions = {
    path: 'assets/animations/reset-loop.json',
    loop:true,
  };

  animationCreated(animationItem: AnimationItem): void {
    animationItem.addEventListener('complete', () => {
      animationItem.destroy();
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.showResetLoop = true;
    }, 5000); 
    const video = this.videoPlayer.nativeElement;
    video.muted = true;
    video.controls=false;
    video.loop = true;
    video.play(); // Start playing the video
  }



  onVideoLoaded() {
    // Additional data has been loaded
    if (!this.videoLoaded && this.videoPlayer.nativeElement.readyState >= 3) {
      this.videoLoaded = true;
      console.log("loaded")
    }
  }
}
