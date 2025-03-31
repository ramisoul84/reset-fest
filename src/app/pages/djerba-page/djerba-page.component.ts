import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-djerba-page',
  imports: [CommonModule],
  templateUrl: './djerba-page.component.html',
  styleUrl: './djerba-page.component.css'
})
export class DjerbaPageComponent {
  show:boolean=false;
  src:string= '';

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

  onImageClick(event: Event):void{
    const imageElement = event.target as HTMLImageElement;
    this.src = imageElement.src;
    this.show = !this.show
  }
}
