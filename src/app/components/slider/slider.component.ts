import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
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
  @Input() initialSlideIndex: number = 0;
  @ViewChild('swiperContainer') swiperContainer: any;
  @Input() swiperConfig: SwiperOptions = {
    initialSlide:5,
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


    // Optional: Public method to change slide programmatically
    public goToSlide(index: number): void {
      const validatedIndex = index
      if (this.swiperContainer?.swiper) {
        this.swiperContainer.swiper.slideTo(validatedIndex);
      }
    }
}
