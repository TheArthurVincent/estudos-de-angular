import { Component } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.scss'],
})
export class ThirdComponentComponent {
  render: any = 'Foi';
  arth: string = 'Arthur Cardoso';

  urlImg: any =
    'https://www.google.com.ar/logos/doodles/2023/international-womens-day-2023-6753651837109578-6752733080608198-cst.png';
  urlImg2: any =
    'https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/1c/d3/ab/1cd3abf2-8a73-547b-7e09-ed5d2685a051/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png';
  urlImg3: any =
    'https://i0.wp.com/osollo.com.br/wp-content/uploads/2017/03/tchau.jpg?fit=600%2C400&ssl=1';
  equation(x: number) {
    return 2 * x + 1;
  }
}
