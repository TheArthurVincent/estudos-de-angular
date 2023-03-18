import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-class-fifteen',
  templateUrl: './class-fifteen.component.html',
  styleUrls: ['./class-fifteen.component.scss'],
})
export class ClassFifteenComponent implements OnInit {
  public date = new Date();
  public arth: any = '';
  public oi: string = 'oiAAAoi';
  public arthurRodrigues = {
    profession: 'teacher',
    maritalStatus: 'married',
    age: '28',
    nacionality: 'brazilian',
  };
  public theNumber: number = 15.456123789;
  public theNumber2: number = 0.405;
  public lorem: string = 'fuo iytdfi yitgfi uytfio';
  @Input('nomeDaPessoa') public nome: any;
  @Output() changeNumber = new EventEmitter();
  handleClick() {
    console.log('mudou');
    this.changeNumber.emit();
  }
  testCV(e: any) {
    this.arth = e;
    return e;
    this.changeNumber.emit();
  }
  ngOnInit(): void {}
}
