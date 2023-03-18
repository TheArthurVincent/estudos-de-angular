import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss'],
})
export class SecondComponentComponent {
  title2: string = 'Testando componente de novo módulo';
}
