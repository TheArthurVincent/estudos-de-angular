import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPeople } from './people';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private _url: string = '/assets/data/people.json';
  constructor(private http: HttpClient) {}
  getPeople(): Observable<IPeople[]> {
    return this.http.get<IPeople[]>(this._url);
  }
}
