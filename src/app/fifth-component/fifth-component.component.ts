import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fifth-component',
  templateUrl: './fifth-component.component.html',
  styleUrls: ['./fifth-component.component.scss'],
})
export class FifthComponentComponent implements OnInit {
  myname: string = 'arth';
  myWifesName: string = 'gabi';
  theName: string = 'abc';
  //
  localTitle: string = 'Arthur';
  localSubtitle: string = 'Who is?';
  theLocalText: string = 'O texto que escolheremos adicionar';
  localTitle2: string = 'Gabriela';
  localSubtitle2: string = 'Quem é?';
  theLocalText2: string =
    'Texto que escolheremos adicionar aqui neste local. Texto que escolheremos adicionar aqui neste local. Texto que escolheremos adicionar aqui neste local. Texto que escolheremos adicionar aqui neste local. ';
  color1: string = '#112230';
  color2: string = '#eee';
  color3: string = '#987';
  color4: string = '#753';
  color5: string = '#456111';
  color6: string = '#111122';
  localstyles: string = 'padding: 1rem; margin: 1rem; border-radius: 1rem';
  px1: any = '1rem';
  px2: any = '3rem';
  px3: any = '6rem';

  ngOnInit(): void {}
}
