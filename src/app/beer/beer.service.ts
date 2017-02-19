import { Injectable } from '@angular/core';

import { Beer } from './beer';
import { Brewer } from './brewer';

import { BEERS } from './data/beerData';
import { BREWERS } from './data/brewerData';

@Injectable()
export class BeerService {

  constructor() { }

  getBeers() : Promise<Beer[]> {
    return Promise.resolve(BEERS);
  }

  // getBrewer(beerId: number) : Promise<Brewer> {

  // }

}
