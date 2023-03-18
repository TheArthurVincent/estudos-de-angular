import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  DoCheck,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-cicles',
  templateUrl: './cicles.component.html',
  styleUrls: ['./cicles.component.scss'],
})
export class CiclesComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    DoCheck
{
  @Input() valorinicial: number = 10;
  constructor() {
    this.log('constructor');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
  ngDoCheck() {
    this.log('ngDoCheck');
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  private log(hook: string) {
    console.log(hook);
  }
}
