import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MusicComponent } from "../../components/music/music.component";
import { FashionComponent } from "../../components/fashion/fashion.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { WorkComponent } from "../../components/work/work.component";
import { TicketsComponent } from "../../components/tickets/tickets.component";


@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    MusicComponent,
    FashionComponent,
    ExperienceComponent,
    HeroComponent,
    WorkComponent,
    TicketsComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {
  bgColor:string='transparent';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const hero= document.getElementById('hero-img');
    const music= document.getElementById('music-img');
    const experience= document.getElementById('experience-img');
    const fashion= document.getElementById('fashion-img');
    const work= document.getElementById('work-img');
    const height = window.innerHeight
    const heroPosition = hero!.getBoundingClientRect().bottom;
    const musicPosition = music!.getBoundingClientRect().bottom;
    const experiencePosition = experience!.getBoundingClientRect().bottom;
    const fashionPosition = fashion!.getBoundingClientRect().bottom;
    const workPosition = work!.getBoundingClientRect().bottom;
    if (workPosition - height < 50) {
      this.bgColor = '#557376'
    }else if (fashionPosition - height < 50) {
      this.bgColor = '#db8a08'
    }else if (experiencePosition - height < 50) {
      this.bgColor = '#557376'
    }else if (musicPosition - height < 50) {
      this.bgColor = '#db8a08'
    }else if (heroPosition - height < 50) {
      this.bgColor = '#557376'
    }else{
      this.bgColor = 'transparent'
  }
   
  }
}
