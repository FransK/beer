import { Component, OnInit } from '@angular/core';

import { Beer } from '../../beer';
import { BeerService } from '../../beer.service';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.html'
})
export class AddBeerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
  }

}
