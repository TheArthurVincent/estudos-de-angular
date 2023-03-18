import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponentComponent } from './second-component/second-component.component';

@NgModule({
  declarations: [SecondComponentComponent],
  imports: [CommonModule],
  exports: [SecondComponentComponent],
})
export class SubmoduleModule {}
