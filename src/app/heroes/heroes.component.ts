import { Hero } from './hero.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  hero: Hero = { id: 1, name: 'Windstorm' };
  hero1: Hero = { id: 2, name: 'WinForm' };
  hero3: Hero = { id: 3, name: 'PokeWonst' };

}
