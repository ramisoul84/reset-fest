import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-fashion-page',
  imports: [CommonModule,SliderComponent],
  templateUrl: './fashion-page.component.html',
  styleUrl: './fashion-page.component.css'
})
export class FashionPageComponent {
  show:boolean=false;
  src:string= '';
  
  fashion: string[] = [
    'assets/images/fashion/1.jpg',
    'assets/images/fashion/2.jpg',
    'assets/images/fashion/3.jpg',
    'assets/images/fashion/4.jpg',
    'assets/images/fashion/5.jpg',
    'assets/images/fashion/6.jpg',
    'assets/images/fashion/7.jpg',
    'assets/images/fashion/8.jpg',
    'assets/images/fashion/9.jpg',
    'assets/images/fashion/10.jpg',
    'assets/images/fashion/11.jpg',
    'assets/images/fashion/12.jpg',
    'assets/images/fashion/13.jpg',
    'assets/images/fashion/14.jpg',
    'assets/images/fashion/15.jpg',
    'assets/images/fashion/16.jpg',
    'assets/images/fashion/17.jpg',
    'assets/images/fashion/18.jpg',
    'assets/images/fashion/19.jpg',
    'assets/images/fashion/20.jpg',
    'assets/images/fashion/21.jpg',
    'assets/images/fashion/22.jpg',
    'assets/images/fashion/23.jpg',
    'assets/images/fashion/24.jpg',
    'assets/images/fashion/25.jpg',
    'assets/images/fashion/26.jpg',
  ];


  onImageClick(event: Event):void{
    const imageElement = event.target as HTMLImageElement;
    this.src = imageElement.src;
    this.show = !this.show
  }

  initialSlide = 0; // Default starting slide

  @ViewChild('sliderRef') slider!: SliderComponent;
  goToFifthSlide() {
    if (this.slider && this.slider.goToSlide) {
      this.slider.goToSlide(4);
    }
  }
}
