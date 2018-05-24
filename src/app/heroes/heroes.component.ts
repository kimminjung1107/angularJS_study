import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  hero: Hero = {id: 1, name: 'Winstorm'};
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() {
    console.log('constructor 호출');
  }

  ngOnInit() {
    console.log('ngOnInit() 메서드 호출');
  }

  ngOnDestroy() {
    console.log('ngOndestory() 메서드 호출');
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
