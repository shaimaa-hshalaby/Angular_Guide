import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './models/mockheros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  secondHeros:Hero[]=[
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
  ];

  constructor() {
    console.log("inside heroservice constructor")
  }


  getHeroes(): Hero[] {
    return HEROES;
  }

  getSecondHeroes(): Hero[] {
    return this.secondHeros;
  }

  addToHeros(hero:Hero){
    this.secondHeros.push(hero);
  }
  

}

