import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

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
  addBeer(beerid: string, breweryid: string, characteristics: string[], name: string, type: string) {
    this.db.object(`/beers/${beerid}`).subscribe((beer) => {
      if (beer.$exists) {
        // This beer already exists in the database
        console.log('Beer already exists, try again');
      }
      else {
        // This is a new beer that we can add
        var newCharacteristics = {};
        characteristics.forEach(characteristic => {
          newCharacteristics[characteristic] = 'true';
        });
        var newBeer = {
          brewery: breweryid,
          characteristics: newCharacteristics,
          name: name,
          type: type
        };

        beer.set(newBeer);
      }
      
    })
  }

}
