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
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @Input() swiperConfig: SwiperOptions = {
    initialSlide:5,
    autoplay:true,
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: false,
    navigation: false,
  };



  ngAfterViewInit(): void {
    const swiperEl = this.swiperContainer.nativeElement;
    if (swiperEl) {
      Object.assign(swiperEl, this.swiperConfig);
      // @ts-ignore - initialize is available at runtime
      swiperEl.initialize();
    }
  }


  public goToSlide(index: number): void {
    const swiperEl = this.swiperContainer.nativeElement;
    if (swiperEl && swiperEl.swiper) {
      swiperEl.swiper.slideTo(index);
    }
  }
}
