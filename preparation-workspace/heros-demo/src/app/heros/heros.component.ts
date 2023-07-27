import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
   // this.heroes = this.heroService.getHeroes();
   this.heroes = this.heroService.getSecondHeroes()
  }

  addHero(id:string,name:string){
    this.heroService.addToHeros({ id: Number(id), name: name },)
  }

}
