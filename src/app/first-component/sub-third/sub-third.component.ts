import { Component } from '@angular/core';
import { InjecaoDeDependenciaService } from './injecao-de-dependencia.service';
@Component({
  selector: 'app-sub-third',
  templateUrl: './sub-third.component.html',
  styleUrls: ['./sub-third.component.scss'],
})
export class SubThirdComponent {
  // var myItems2 = new InjecaoDeDependenciaService();

  myName: string = 'Arthur';
  age: number = 28;
  nasc: string = '22/09/1994';
  myItems: string[] = [
    'Item 1',
    'Testanto',
    'só uma lista mesmo',
    'Item 1',
    'Testanto',
    'só uma lista mesmo',
    'Item 1',
    'Testanto',
    'só uma lista mesmo',
    'Item 1',
    'Testanto',
    'só uma lista mesmo',
    'Item 1',
    'Testanto',
    'só uma lista mesmo',
    'Item 1',
    'Testanto',
    'só uma lista mesmo',
  ];
  myItems2: string[] = [];
  explain: string = '';
  foods: string[] = [];
  constructor(private injecao: InjecaoDeDependenciaService) {
    this.myItems2 = this.injecao.getList();
    this.explain = this.injecao.explanation;
    this.foods = injecao.getFoods();
  }
}
