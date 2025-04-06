import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink,LottieComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() color: string = "";
  isMenuOpened:boolean = false;
  isLogoShow:boolean = false;
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const mission= document.getElementById('mission-section');
    const height = window.innerHeight
    const missionPosition = mission!.getBoundingClientRect().top;
    if ( missionPosition < 0){
      this.isLogoShow = true
    }else{
      this.isLogoShow = false
    }
  }


  private hexToRgba(hex: string, alpha: number): string {
    // If already in rgb/rgba format, reuse it
    if (hex.startsWith('rgb')) {
      return hex.replace(/rgba?\(([^)]+)\)/, `rgba($1, ${alpha})`);
    }

    // Remove # if present
    hex = hex.replace('#', '');

    // Parse r, g, b values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
  getGradient(color: string): string {
    const defaultColor = "#db8a08"; // Fallback to orange
    const safeColor = color || defaultColor;
    
    const rgbaSolid = this.hexToRgba(safeColor, 1);
    const rgbaTransparent = this.hexToRgba(safeColor, 0);
    
    return `linear-gradient(180deg, ${rgbaSolid} 10%, ${rgbaTransparent} 50%)`;
  }
}
