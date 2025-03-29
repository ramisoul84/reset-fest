import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MusicComponent } from "../../components/music/music.component";
import { FashionComponent } from "../../components/fashion/fashion.component";


@Component({
  selector: 'app-home-page',
  imports: [ HeaderComponent, FooterComponent, MusicComponent, FashionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  bgColor:string='transparent';



  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const musicSection = document.getElementById('music-img');
    const height = window.innerHeight

      const musicPosition = musicSection!.getBoundingClientRect().bottom;
 
     
    
      if (musicPosition - height < 150) {
        this.bgColor = '#db8a08'
      }
    
  }
}
