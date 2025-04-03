import { Component, Input } from '@angular/core';
import { SectionPictureComponent } from "../section-picture/section-picture.component";
import { SliderComponent } from '../slider/slider.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fashion',
  imports: [SectionPictureComponent,SliderComponent,RouterLink,CommonModule],
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
  @Input() isMobile: boolean = false;
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
}
