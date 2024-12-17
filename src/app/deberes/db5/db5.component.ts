import { Component } from '@angular/core';

@Component({
  selector: 'app-db5',
  standalone: false,
  
  templateUrl: './db5.component.html',
  styleUrl: './db5.component.css'
})
export class Db5Component {
  images = [
    {
      url: 'https://th.bing.com/th/id/OIP.APUPLLycqR6YuXfxkiVNsAHaEb?rs=1&pid=ImgDetMain',
      alt: 'Image 1',
      name: 'Image 1',
      price: '10.00',
    },
    {
      url: 'https://newsroom.plusatlas.com/uploads/medium/000/001/126/portada_PlusAtlas-33252087-0549-4a7b-aaf6-a2bedce7207f.jpg',
      alt: 'Image 2',
      name: 'Image 2',
      price: '12.00',
    },
    {
      url: 'https://th.bing.com/th/id/R.216f0328a0cda1b5f2dadeb673613e18?rik=HnsqbTfBOGSsNA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-oiVGF-gdhvQ%2fT8ZiQ-KTZ7I%2fAAAAAAAAeW4%2foATV1UnbTcc%2fs1600%2fLeon_Imagenes-de-Animales-en-HD.jpg&ehk=O8apb0rWvaZPbNMA0vMOLyLKb9uQd9wguZxmtxXrPb0%3d&risl=&pid=ImgRaw&r=0',
      alt: 'Image 3',
      name: 'Image 3',
      price: '15.00',
    },
    {
      url: 'https://png.pngtree.com/png-clipart/20230413/original/pngtree-cow-cartoon-illustration-png-image_9050067.png',
      alt: 'Image 4',
      name: 'Image 4',
      price: '8.00',
    }
  ];

  // Opciones para hacer el carrusel responsive
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
  

