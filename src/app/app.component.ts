import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-studies';
  valorinicial: number = 5;
  delete: boolean = false;
  mudarValor() {
    this.valorinicial++;
  }
  deletarCiclo() {
    this.delete = true;
  }
}
