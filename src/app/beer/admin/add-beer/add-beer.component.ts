import { Component, OnInit } from '@angular/core';
import { Beer } from '../../beer';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.html'
})
export class AddBeerComponent implements OnInit {
  submitted = false;
  verified = false;
  beerModel = new Beer('', '', {}, '', '');
  breweries: FirebaseListObservable<any>;
  characteristics: FirebaseListObservable<any>;
  types: FirebaseListObservable<any>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.breweries = this.firebaseService.getBreweries();
    this.characteristics = this.firebaseService.getCharacteristics();
    this.types = this.firebaseService.getTypes();
  }

  onSubmit() {
    this.submitted = true;
  }

  onVerified() {
    this.verified = true;
    
    //Add the beer
    this.firebaseService.addBeer(this.beerModel);
  }
}
