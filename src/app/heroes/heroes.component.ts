import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // selectedHero: Hero;

  // heroes = HEROES;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  //Adjust this method to return an Observable<Hero[]>
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        // .subscribe(heroes => this.heroes = heroes.slice(1, 5));
        //reduce number of heroes displayed to four
  }

}
