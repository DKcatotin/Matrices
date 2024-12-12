import { Component } from '@angular/core';

@Component({
  selector: 'app-db5',
  standalone: false,
  
  templateUrl: './db5.component.html',
  styleUrl: './db5.component.css'
})
export class Db5Component {
  images = [
    'https://i.pinimg.com/originals/d7/16/20/d716209dbb093d3aac2e523f894b5996.gif',
    'https://i.redd.it/52k40n41gol51.jpg',
    'https://th.bing.com/th/id/R.c80c01b95d6807a6bd4b31c4fa8f5db9?rik=PsvKsEhz41PjUA&riu=http%3a%2f%2fpm1.narvii.com%2f7398%2fff2eadcaca6f13e29b3e1d45d716d6ca988bde8br1-625-625v2_uhq.jpg&ehk=wDXFpysyB5O1Pny9v%2bsm%2bDDz6ilPxluBxhmw1JWfm8k%3d&risl=&pid=ImgRaw&r=0',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4236d1d9-6a66-4488-ab28-bf744b693173/ddn54uv-2d9156a6-6e13-45f4-a2f5-e0c8fb637418.jpg'
  ];
  autoplay: boolean = true;
  interval: number = 3000;
}
