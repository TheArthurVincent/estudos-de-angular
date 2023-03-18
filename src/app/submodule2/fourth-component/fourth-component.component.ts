import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.scss'],
})
export class FourthComponentComponent {
  divKey: string = '';
  divValue: string = '';
  savedValue: string = '';
  clickedButton(e: string) {
    alert(e);
  }

  // perguntar pro will #1
  onKeyUp(event: any) {
    let key = event.key;
    this.divKey = key;
    let value = event.target.value;
    this.divValue = value;
  }
  saveValue(e2: any) {
    this.savedValue = e2.target.value;
    console.log(e2);
  }
}
