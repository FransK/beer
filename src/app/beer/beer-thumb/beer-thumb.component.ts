import { Component, Input } from '@angular/core';

import { Beer } from '../beer';

@Component({
  selector: 'app-beer-thumb',
  templateUrl: './beer-thumb.component.html',
  styleUrls: ['./beer-thumb.component.css']
})
export class BeerThumbComponent {
  @Input()
  beer: Beer;
}
