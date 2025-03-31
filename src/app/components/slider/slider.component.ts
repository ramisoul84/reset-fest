import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types';




@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent<T = any> implements AfterViewInit {
  @Input() items: T[] = [];
  @Input() itemTemplate?: any;
  @Input() slider: boolean = false;
  @Input() swiperConfig: SwiperOptions = {
    autoplay:true,
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: false,
    navigation: false,
  };

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Ensure Swiper is properly initialized
    const swiperEl = this.el.nativeElement.querySelector('swiper-container');
    if (swiperEl) {
      Object.assign(swiperEl, this.swiperConfig);
      // @ts-ignore - initialize is available at runtime
      swiperEl.initialize();
    }
  }
}
