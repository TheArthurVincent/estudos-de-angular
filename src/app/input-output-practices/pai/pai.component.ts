import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss'],
})
export class PaiComponent {
  @Output() info: string = '';
  constructor() {}
  ngOnInit(): void {}
}
