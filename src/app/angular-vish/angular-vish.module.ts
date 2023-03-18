import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VishComponent } from './vish/vish.component';
import { ClassFiveComponent } from './class-five/class-five.component';
import { ClassFifteenComponent } from './class-fifteen/class-fifteen.component';
import { ClassSeventeenComponent } from './class-seventeen/class-seventeen.component';

@NgModule({
  declarations: [
    VishComponent,
    ClassFiveComponent,
    ClassFifteenComponent,
    ClassSeventeenComponent,
  ],
  imports: [CommonModule],
  exports: [VishComponent],
})
export class AngularVishModule {}
