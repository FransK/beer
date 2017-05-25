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

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.beerModel); }

  onSubmit() {
    this.submitted = true;
  }
}



  
                // <!--<input type="checkbox" name="Hoppy" value="on"> Hoppy 
                // <input type="checkbox" name="Easy-Drinking" value="on"> Easy Drinking
                // <input type="checkbox" name="Clean" value="on"> Clean
                // <input type="checkbox" name="Sweet" value="on"> Sweet
                // <input type="checkbox" name="Sour" value="on"> Sour
                // <input type="checkbox" name="Bitter" value="on"> Bitter
                // <input type="checkbox" name="Affordable" value="on"> Affordable
                // <input type="checkbox" name="Expensive" value="on"> Expensive
                // <input type="checkbox" name="Simple" value="on"> Simple
                // <input type="checkbox" name="Complex" value="on"> Complex-->
