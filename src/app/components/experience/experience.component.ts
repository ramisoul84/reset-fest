import { Component, Input } from '@angular/core';
import { SectionPictureComponent } from "../section-picture/section-picture.component";
import { SliderComponent } from "../slider/slider.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [SectionPictureComponent, SliderComponent,RouterLink,CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() isMobile: boolean = false;
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
  ];

  hotel: string[] = [
    'assets/images/hotel/1.jpg',
    'assets/images/hotel/2.jpg',
    'assets/images/hotel/3.jpg',
    'assets/images/hotel/4.jpg',
    'assets/images/hotel/5.jpg',
  ];
}
