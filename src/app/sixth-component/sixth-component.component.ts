import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sixth-component',
  templateUrl: './sixth-component.component.html',
  styleUrls: ['./sixth-component.component.scss'],
})
export class SixthComponentComponent implements AfterViewInit {
  @ViewChild('nameRef')
  nameElementRef!: ElementRef;
  value: number = 0;

  incrementa() {
    this.value++;
  }
  decrementa() {
    this.value--;
  }
  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }
}
