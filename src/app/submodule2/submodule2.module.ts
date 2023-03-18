import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';

@NgModule({
  declarations: [ThirdComponentComponent, FourthComponentComponent],
  imports: [CommonModule],
  exports: [ThirdComponentComponent, FourthComponentComponent],
})
export class Submodule2Module {}
