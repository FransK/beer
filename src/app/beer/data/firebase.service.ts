import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Beer } from '../beer';
import { Brewery } from '../brewery';
import { Review } from '../review';
import { Reviewer } from '../reviewer';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  // Auth
  getCurrentUser() : Observable<firebase.User> {
    return this.afAuth.authState;
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // Getters
  getBeers() : FirebaseListObservable<any> {
    return this.db.list('/beers');
  }

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

  getReviewers() : FirebaseListObservable<any> {
    return this.db.list('/reviewers');
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

    this.db.object('/').update(updatedBeerData);
  }

  addBrewery(brewery: Brewery) {
    const currentBrewery = this.db.object(`/breweries/${brewery.breweryid}`);
    currentBrewery.take(1).subscribe(snapshot => {
      if (!snapshot.$exists()) {
        var updatedBrewery = {
          location: brewery.location,
          name: brewery.name
        }
        currentBrewery.set(updatedBrewery);
      }
    });
  }

  addCharacteristic(characteristic: string) {
    const currentChar = this.db.object(`/characteristics/${characteristic}`);
    currentChar.take(1).subscribe(snapshot => {
      if (!snapshot.$exists()) {
        currentChar.set(true);
      }
    });
  }

  addReview(review: Review) {
    const currentReview = this.db.object(`/reviews/${review.beerid}/${review.reviewerid}`);
    currentReview.take(1).subscribe(snapshot => {
      if (!snapshot.$exists()) {
        this.addReviewCallback(review);
      }
    });
  }

  addReviewCallback(review: Review) {
    var updatedReviewData = {};
    updatedReviewData[`reviews/${review.beerid}/${review.reviewerid}`] = {
      ranking: review.rating,
      review: review.review,
      tagline: review.tagline,
      timestamp: new Date().getTime()
    };
    updatedReviewData[`reviewers/${review.reviewerid}/reviews/${review.beerid}`] = true;

    this.db.object('/').update(updatedReviewData);
  }

  addReviewer(reviewer: Reviewer) {
    const currentReviewer = this.db.object(`/reviewers/${reviewer.reviewerid}`);
    currentReviewer.take(1).subscribe(snapshot => {
      if (!snapshot.$exists()) {
        // Create newly authenticated user
        this.afAuth.auth.createUserWithEmailAndPassword(reviewer.email, reviewer.password).catch(function(error) {
          // handle Errors here.
          var errorName = error.name;
          var errorMessage = error.message;
        }).then((user) => {
          this.addReviewerCallback(reviewer, user);
        }, function(error) {
          // Creation error
        });
      }
    });
  }

  addReviewerCallback(reviewer: Reviewer, user: firebase.User) {
    // Update the database
    var updatedReviewer = {
      email: reviewer.email,
      name: reviewer.name,
      reviewerid: reviewer.reviewerid,
      verified: false,
    }

    user.updateProfile({
      displayName: reviewer.name,
      photoURL: ''
    }).then(() => {
      // Update success
      this.db.object(`/reviewers/${user.uid}`).update(updatedReviewer);
    }, function(error) {
      // Update error
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
