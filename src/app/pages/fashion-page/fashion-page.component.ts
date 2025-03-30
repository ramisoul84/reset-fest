import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DJ } from '../../_models/dj';

@Component({
  selector: 'app-fashion-page',
  imports: [CommonModule],
  templateUrl: './fashion-page.component.html',
  styleUrl: './fashion-page.component.css'
})
export class FashionPageComponent {
  select:DJ={name:"",info:""};
   djs: DJ[] = [
      {name:"Frankey & Sandrino",info:"The music at RE:SET is a journey – one that mirrors the island’s energy, from the sun-soaked afternoons to the starry, rhythmic nights. Our soundscape weaves together groovy house beats, deep, hypnotic techno, and soulful minimal rhythms, all designed to carry you deeper into the moment",img:"assets/images/djs/1.jpeg",expanded:false},
      {name:"Luca Olivotto",info:"German DJ....   House music specialist",img:"assets/images/djs/2.jpeg",expanded:false},
      {name:"Eva Crystaltips",info:"The music at RE:SET is a journey – one that mirrors the island’s energy, from the sun-soaked afternoons to the starry, rhythmic nights. Our soundscape weaves together groovy house beats, deep, hypnotic techno, and soulful minimal rhythms, all designed to carry you deeper into the moment",expanded:false},
      {name:"Quadrakey",info:"",expanded:false},
      {name:"Nephews",info:"German DJ....   House music specialist",expanded:false},
      {name:"Siggatunez",info:"",expanded:false},
      {name:"Sarah Wild",info:"",expanded:false},
      {name:"Carmen Electro",info:"",expanded:false},
      {name:"Sam Shure",info:"",expanded:false},
      {name:"Skatman",info:"",expanded:false},
      {name:"Glia",info:""},
      {name:"BRTINZZ",info:""},
      {name:"Gil bert",info:""},
      {name:"Blackbox",info:""},
      {name:"Bianca Banks",info:""},
      {name:"Tofu und Acid",info:""},
      {name:"JSAVANT",info:""}, 
      {name:"Polytox",info:""}, 
      {name:"Illinios",info:""}, 
      {name:"Sarica",info:""},
      {name:"Leandro",info:""}, 
      {name:"Genji Yoshiba",info:""}, 
      {name:"Zare",info:""}, 
      {name:"Slevin Flakes",info:""},
      {name:"Love Operator",info:""}, 
      {name:"Toast Hawaii",info:""}, 
      {name:"Gonzalo Lavin",info:""}, 
      {name:"Zuleta M",info:""}, 
      {name:"Dash",info:""}, 
      {name:"Besch",info:""},
      {name:"Hanafia",info:""},
      {name:"Luke Lash",info:""},
      {name:"A FRIEND",info:""},
      {name:"Rio",info:""},
      {name:"Alex Grebe",info:""}, 
      {name:"DJ Sunburn",info:""},
      {name:"Dolo Desir",info:""},
      {name:"Mono Rome",info:""},
      {name:"Lukas & Lisa",info:""},
      {name:"Yassine Karoui",info:""},
      {name:"Selim X Noor Arjoun",info:""}
    ]
  

  show:boolean=false;

  toggleSticky(clickedDj: DJ) {
    const wrapper = document.querySelector('.lineup');
    const info = document.querySelector('.info');
    wrapper!.classList.add('move-up');
    info!.classList.add('show');
    this.select=clickedDj;
  }
}
