import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent implements OnInit {
  ngOnInit(): void {}
  @Input() title!: string;
  @Input() firstsubtitle!: string;
  @Input() thetext!: string;
  @Input() bgcolor!: string;
  @Input() txtcolor!: string;
  result!: number;
  @Input() thestyles!: string;
  @Input('paddingandmargin') set setValue(value: any) {
    this.paddingandmargin = value;
    // tentanto descobrir como voltar isso:
    console.log(`${value}px`);
    // tentanto descobrir como voltar isso:
  }
  paddingandmargin!: any;
}
