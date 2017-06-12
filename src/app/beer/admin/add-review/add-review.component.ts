import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Review } from '../../review';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.html'
})
export class AddReviewComponent implements OnInit {
  public addBeerCollapsed = true;
  public errorMessage: string;

  submitted = false;
  verified = false;
  reviewModel = new Review('', '', '', '', null, '', '', 0);
  beers: FirebaseListObservable<any>;
  currentUser: Observable<firebase.User>;
  currentReviewer: FirebaseObjectObservable<any>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.beers = this.firebaseService.getBeers();
    this.currentUser = this.firebaseService.getCurrentUser();
    this.getReviewer();
  }

  getReviewer() {
    this.currentUser.take(1).subscribe((user) => {
      this.currentReviewer = this.firebaseService.getCurrentReviewer(user.uid);
      this.currentReviewer.take(1).subscribe((reviewer) => {
        this.reviewModel.reviewer = reviewer.name;
        this.reviewModel.reviewerid = reviewer.reviewerid;
      })
    })
  }

  onSubmit() {
    this.firebaseService.getBeerById(this.reviewModel.beerid).take(1).subscribe(beer => {
      this.reviewModel.beer = beer.name;
      this.reviewModel.timestamp = new Date().getTime();
      this.submitted = true;
    })
  }

  onVerified() {
    this.firebaseService.addReview(this.reviewModel)
      .then(() => this.verified = true)
      .catch(error => this.errorMessage = error.message);
  }
}
