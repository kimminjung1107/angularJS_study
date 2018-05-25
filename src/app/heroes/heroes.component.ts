import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    console.log('constructor 호출');
  }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy() {
    console.log('ngOndestory() 메서드 호출');
  }

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(response => this.heroes = response);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
