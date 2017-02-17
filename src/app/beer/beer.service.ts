import { Injectable } from '@angular/core';

import { Beer } from './beer';
import { BEERS } from './data/beerData';

@Injectable()
export class BeerService {

  constructor() { }

  getBeers() : Promise<Beer[]> {
    return Promise.resolve(BEERS);
  }

}
