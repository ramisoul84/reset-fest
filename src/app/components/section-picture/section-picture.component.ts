import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-picture',
  imports: [],
  templateUrl: './section-picture.component.html',
  styleUrl: './section-picture.component.css'
})
export class SectionPictureComponent {
  @Input() src: string = "";
  @Input() decor: string = "";
}
