import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SliderComponent } from '../../components/slider/slider.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-djerba-page',
  imports: [CommonModule,SliderComponent,RouterLink],
  templateUrl: './djerba-page.component.html',
  styleUrl: './djerba-page.component.css'
})
export class DjerbaPageComponent {
  show:boolean=true;
  index=0;
  src:string= 'assets/images/djerba/1.jpg';
  swiperConfig: SwiperOptions = {
    initialSlide:0,
    autoplay:false,
    loop:false,
    slidesPerView: 6,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    autoHeight:true,
    effect:'slide',
    grabCursor:true,
  }



  djerba: string[] = [
    'assets/images/djerba/1.jpg',
    'assets/images/djerba/2.jpg',
    'assets/images/djerba/3.jpg',
    'assets/images/djerba/4.jpg',
    'assets/images/djerba/5.jpg',
    'assets/images/djerba/6.jpg',
    'assets/images/djerba/7.jpg',
    'assets/images/djerba/8.jpg',
    'assets/images/djerba/9.jpg',
    'assets/images/djerba/10.jpg',
    'assets/images/djerba/11.jpg',
    'assets/images/djerba/12.jpg',
    'assets/images/djerba/13.jpg',
    'assets/images/djerba/14.jpg',
    'assets/images/djerba/15.jpg',
    'assets/images/djerba/16.jpg',
    'assets/images/djerba/17.jpg',
    'assets/images/djerba/18.jpg',
    'assets/images/djerba/19.jpg',
    'assets/images/djerba/20.jpg',
    'assets/images/djerba/21.jpg',
    'assets/images/djerba/22.jpg',
    'assets/images/djerba/23.jpg',
    'assets/images/djerba/24.jpg',
    'assets/images/djerba/25.jpg',
  ];

  onImageClick(event: Event):void{
    const imageElement = event.target as HTMLImageElement;
    this.src = imageElement.src;
    this.index=5;
  }

}
