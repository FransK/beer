import { Component, OnInit } from '@angular/core';

import { Beer } from '../beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
  }

}
