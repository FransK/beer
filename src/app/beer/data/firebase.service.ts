import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
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
    this.db.object(`/beers/${beer.beerid}`).$ref.transaction(currentBeer => {
      if (currentBeer !== null) {
        // This beer already exists in the database
        console.log('Beer already exists');
      }
      else {
        // This is a new beer that we can add
        var newBeer = {
          brewery: beer.breweryid,
          characteristics: beer.characteristics,
          name: beer.name,
          type: beer.type
        };

        return newBeer;
      }
    })
    .then(result => {
      if (result.committed) {
        // Actions on success
      }
    })
    .catch(error => {
      // handle error
    });
  }

}
