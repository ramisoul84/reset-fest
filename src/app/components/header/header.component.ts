import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink,LottieComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpened:boolean = false;
  resetLoopOptions: AnimationOptions = {
    path: 'assets/animations/reset-loop.json',
    loop:true,
  };
  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }

  scrollToPage(page: string) {
    this.isMenuOpened = !this.isMenuOpened;
    setTimeout(() => {
      document
      .getElementById(page.toLowerCase())!
      .scrollIntoView({ behavior: 'smooth' });
    }, 600); 
  }
}
