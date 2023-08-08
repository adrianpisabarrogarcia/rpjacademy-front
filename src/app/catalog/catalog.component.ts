import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent {

  courses: any = [
    {
      id: 1,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      price: 200,
      imageUrl: 'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36',
      isAvailable: true,
      category: 'WEB'
    },
    {
      id: 2,
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
      price: 150,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      isAvailable: true,
      category: 'WEB'
    },{
      id: 3,
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      price: 200,
      imageUrl: 'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36',
      isAvailable: true,
      category: 'WEB'
    },
    {
      id: 4,
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
      price: 150,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      isAvailable: true,
      category: 'WEB'
    },
    {
      id: 5,
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
      price: 150,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      isAvailable: true,
      category: 'WEB'
    }
  ];

}
