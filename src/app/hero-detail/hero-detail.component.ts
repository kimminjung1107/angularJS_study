import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;  /* heros.component.html에서 선택된 값을 받는다 */
  constructor(private route: ActivatedRoute
              , private heroService: HeroService
              , private location: Location) { }

  ngOnInit() {
    console.log('Detail ngOnInit()');
    console.log(this.hero);
    this.getHero();
  }

  getHero(): void {
    // string을 number로 변환
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(res => this.hero = res);
  }

  goBack(): void {
    this.location.back();
  }

  goSave(): void{
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
