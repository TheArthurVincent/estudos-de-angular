import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../class-fifteen/people.service';

@Component({
  selector: 'app-class-seventeen',
  templateUrl: './class-seventeen.component.html',
  styleUrls: ['./class-seventeen.component.scss'],
})
export class ClassSeventeenComponent implements OnInit {
  public persons: any = [];

  constructor(private _peopleService: PeopleService) {}

  ngOnInit() {
    this._peopleService.getPeople().subscribe((data) => (this.persons = data));
  }
}
