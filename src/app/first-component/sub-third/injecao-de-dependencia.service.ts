import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InjecaoDeDependenciaService {
  constructor() {}
  explanation: string =
    'Ou seja: Criei aqui no serviço um método no construtor que simplesmente retorna uma lista. Esse método poderia ter puxado dados do BackEnd? Talvez. Pois bem. A classe toda aqui foi usada no componente como "tipo" de uma variavel privada do constructor, chamada injecao. E aí, o myItems2 que é só uma string vazia foi puxada pra dentro do construtor e atribuída ao "this" e recebendo o getlist dessa classe aqui, que é um método da classe InjecaoDeDependenciaService exportada';
  getList() {
    return [
      'Testanto injeção de dependencia',
      'Testanto injeção de dependencia',
      'Testanto injeção de dependencia',
    ];
  }
  getFoods() {
    return ['rice', 'beans', 'meat', 'fries'];
  }
}
