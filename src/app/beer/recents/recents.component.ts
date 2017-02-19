import { Component, OnInit } from '@angular/core';

import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {
  beers: Beer[] = [];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getBeers().then(beers => this.beers = beers);
  }

}
