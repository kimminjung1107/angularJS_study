import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;  /*heros.component.html에서 선택된 값을 받는다*/
  constructor() { }

  ngOnInit() {
    console.log('Detail ngOnInit()');
    console.log(this.hero);
  }

}
