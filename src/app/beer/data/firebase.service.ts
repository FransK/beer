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

  logoutUser() {
    this.afAuth.auth.signOut();
  }

  // Getters
  getBeerById(beerid:string) : FirebaseObjectObservable<any> {
    return this.db.object(`/beers/${beerid}`);
  }

  getBeers() : FirebaseListObservable<any> {
    return this.db.list('/beers', {
      query: {
        orderByChild: 'name'
      }
    });
  }

  getBreweries() : FirebaseListObservable<any> {
    return this.db.list('/breweries');
  }

  getCharacteristics() : FirebaseListObservable<any> {
    return this.db.list('/characteristics', {
      query: {
        orderByKey: true
      }
    });
  }

  getCurrentReviewer(userid: string) : FirebaseObjectObservable<any> {
    return this.db.object(`/reviewers/${userid}`);
  }

  getCurrentUserReviews(userid: string) : FirebaseListObservable<any> {
    return this.db.list(`/reviewers/${userid}/reviews`);
  }
  
  getFeatures() : FirebaseListObservable<any> {
    return this.db.list('/features', {
      query: {
        orderByChild: 'reviewer'
      }
    });
  }

  getPricing() : FirebaseListObservable<any> {
    return this.db.list('/pricing');
  }

  getNRecentReviews(n: number) : FirebaseListObservable<any> {
    return this.db.list('/recents', {
      query: {
        orderByChild: 'timestamp',
        limitToFirst: n
      }
    });
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
  addBeer(beer: Beer): firebase.Promise<void> {
    var updatedBeerData = {};
    updatedBeerData[`beers/${beer.beerid}`] = {
      brewery: beer.breweryid,
      characteristics: beer.characteristics,
      name: beer.name,
      pricing: beer.pricing,
      type: beer.type
    };
    updatedBeerData[`breweries/${beer.breweryid}/beers/${beer.beerid}`] = true;
    updatedBeerData[`types/${beer.type}/${beer.beerid}`] = true;
    for (var characteristic in beer.characteristics) {
      updatedBeerData[`characteristics/${characteristic}/${beer.beerid}`] = true;
    }

    return this.db.object('/').update(updatedBeerData);
  }

  addBrewery(brewery: Brewery): firebase.Promise<void> {
    var updatedBrewery = {
      location: brewery.location,
      name: brewery.name
    }

    return this.db.object(`/breweries/${brewery.breweryid}`).set(updatedBrewery);
  }

  addCharacteristic(characteristic: string): firebase.Promise<void> {
    return this.db.object(`/characteristics/${characteristic}`).set(true);
  }

  addReview(review: Review): firebase.Promise<void> {
    var user = this.afAuth.auth.currentUser;
    if (user) {
      var updatedReviewData = {};
      updatedReviewData[`reviews/${review.beerid}/${review.reviewerid}`] = {
        ranking: review.rating,
        review: review.review,
        tagline: review.tagline,
        timestamp: review.timestamp
      };
      updatedReviewData[`reviewers/${user.uid}/reviews/${review.beerid}`] = true;

      this.createRecent(review);
      return this.db.object('/').update(updatedReviewData);
    }
  }

  addReviewer(reviewer: Reviewer) {
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

  addType(type: string): firebase.Promise<void> {
    return this.db.object(`/types/${type}`).set(true);
  }

  // Private methods
  private createRecent(review: Review) {
    const recents = this.db.list('/recents');
    var newReview = {
      beer: review.beer,
      beerid: review.beerid,
      reviewer: review.reviewer,
      reviewerid: review.reviewerid,
      tagline: review.tagline,
      timestamp: (-1 * review.timestamp)
    }

    recents.push(newReview);
  }

}
