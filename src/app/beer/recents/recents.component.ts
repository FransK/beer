import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Beer } from '../beer';
import { BeerService } from '../beer.service';
import { FirebaseService } from '../data/firebase.service';

@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {
  beers: Beer[] = [];
  recents: FirebaseListObservable<any>;

  constructor(private beerService: BeerService, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.recents = this.firebaseService.getFeatures();
  }

}
