import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-five',
  templateUrl: './class-five.component.html',
  styleUrls: ['./class-five.component.scss'],
})
export class ClassFiveComponent implements OnInit {
  @Input() public nomeDaPessoa: any;
  public colors: string[] = ['red', 'blue', 'green', 'red', 'blue', 'green'];
  public color: string = 'red';
  public tof3: boolean = true;
  TrueOrFalse: string = '';
  toggleExercise3() {
    this.tof3 = !this.tof3;
    if (this.tof3) {
      this.TrueOrFalse = 'true';
    } else {
      this.TrueOrFalse = 'false';
    }
  }
  tOF: boolean = true;
  toggleTOF() {
    this.tOF = !this.tOF;
  }
  nameNg: any = '';
  domEvent: string = '';
  int1: string = 'Arthur';
  int2: number = 456.123;
  siteUrl: string = 'window.location.href';
  public myId = 'testId';
  public successClass: string = 'success';
  public dangerClass: string = 'danger';
  public specialClass: string = 'special';
  public hasError = true;
  public idDisabled = false;
  public isSpecial = true;
  public classesObject = {
    success: !this.hasError,
    danger: this.hasError,
    special: this.isSpecial,
  };
  isActivated = false;
  public highlight = 'orange';
  public stylesStyles = {
    color: '#456',
    fontStyle: 'italic',
  };
  public greeting: any = '';
  public localVDiv: any = '';

  add(e: any) {
    this.localVDiv = e;
  }
  toggleElement() {
    this.isActivated = !this.isActivated;
  }
  ngOnInit(): void {}
  greetUser(e: number) {
    return 'Hello, ' + this.int1 + e;
  }
  funcao(e: string) {
    return e + this.int2 + this.int1 + 'and' + this.siteUrl;
  }
  onClick(e: any) {
    this.int2++;
    this.domEvent = e.type;
    alert(' welcome!' + this.greeting);
  }
  logMessage(e: any) {
    console.log(e);
  }
}
