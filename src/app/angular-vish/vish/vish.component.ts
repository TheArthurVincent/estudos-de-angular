import { Component } from '@angular/core';

@Component({
  selector: 'vish',
  templateUrl: './vish.component.html',
  styleUrls: ['./vish.component.scss'],
})
export class VishComponent {
  public Arthur: any = 'Arthur';
  public Gabi: any = 'Gabi';
  public Pedro: any = 'Pedro';
  public Lorena: any = 'Lorena';
  public Lili: any = 'Lili';
  public message: any = '';
  onChangeNumber() {
    console.log('oi');
  }
}
