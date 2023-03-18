import { NgModule, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './pai/filho/filho.component';

@NgModule({
  declarations: [PaiComponent, FilhoComponent],
  imports: [CommonModule],
  exports: [PaiComponent],
})
export class InputOutputPracticesModule implements OnInit {
  ngOnInit(): void {}
}
