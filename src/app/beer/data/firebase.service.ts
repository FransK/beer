import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/take';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Beer } from '../beer';
import { Review } from '../review';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  // Getters
  getBreweries() : FirebaseListObservable<any> {
    return this.db.list('/breweries');
  }

  getCharacteristics() : FirebaseListObservable<any> {
    return this.db.list('/characteristics');
  }
  
  getFeatures() : FirebaseListObservable<any> {
    return this.db.list('/features');
  }

  getReview(beerid: string, reviewerid: string) : FirebaseObjectObservable<any> {
    return this.db.object(`/reviews/${beerid}/${reviewerid}`);
  }

  getTypes() : FirebaseListObservable<any> {
    return this.db.list('types');
  }

  // Setters
  addBeer(beer: Beer) {
    const currentBeer = this.db.object(`/beers/${beer.beerid}`);
    currentBeer.take(1).subscribe(snapshot => {
      if (!snapshot.$exists()) {
        this.addBeerCallback(currentBeer, beer);
      }
    });
  }

  addBeerCallback(firebaseObject: FirebaseObjectObservable<any>, beer: Beer) {
    var updatedBeerData = {};
    updatedBeerData[`beers/${beer.beerid}`] = {
      brewery: beer.breweryid,
      characteristics: beer.characteristics,
      name: beer.name,
      type: beer.type
    };
    updatedBeerData[`breweries/${beer.breweryid}/beers/${beer.beerid}`] = true;
    updatedBeerData[`types/${beer.type}/${beer.beerid}`] = true;
    for (var characteristic in beer.characteristics) {
      updatedBeerData[`characteristics/${characteristic}/${beer.beerid}`] = true;
    }

    // TODO: Actually update
    console.log(JSON.stringify(updatedBeerData));
    //this.db.object('/').update(updatedBeerData);
  }

  addCharacteristic(characteristic: string) {
    const currentChar = this.db.object(`/characteristics/${characteristic}`);
    currentChar.take(1).subscribe(snapshot => {
      if (!snapshot.$exists()) {
        currentChar.set(true);
      }
    });
  }

  addType(type: string) {
    const currentType = this.db.object(`/types/${type}`);
    currentType.take(1).subscribe(snapshot => {
      if (!snapshot.$exists()) {
        currentType.set(true);
      }
    });
  }

}
