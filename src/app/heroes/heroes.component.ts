import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    // providers: [HeroService],
    providers: [heroServiceProvider],
    template: `
      <h2>Heroes</h2>
      <hero-list></hero-list>
    `
})
export class HeroesComponent {
}
