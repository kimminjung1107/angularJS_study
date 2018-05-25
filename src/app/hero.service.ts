import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesURL = 'http://localhost:8080/heroes';
  constructor(private http: HttpClient, private msgService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.msgService.add('HeroService: fetched heroed');
    // return of(HEROES); of는 가상으로 시뮬레이션 함.
    return this.http.get<Hero[]>(this.heroesURL);
  }


  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesURL}/${id}`;

    return this.http.get<Hero>(url);
  }

}
