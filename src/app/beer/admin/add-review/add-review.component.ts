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
  submitted = false;
  verified = false;
  reviewModel = new Review('', '', 0, '', '', 0);
  beers: FirebaseListObservable<any>;
  reviewers: FirebaseListObservable<any>;
  currentUser: Observable<firebase.User>;
  currentReviewer: FirebaseObjectObservable<any>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.beers = this.firebaseService.getBeers();
    this.reviewers = this.firebaseService.getReviewers();
    this.currentUser = this.firebaseService.getCurrentUser();
    this.getReviewer();
  }

  getReviewer() {
    this.currentUser.take(1).subscribe((user) => {
      this.currentReviewer = this.firebaseService.getCurrentReviewer(user.uid);
      this.currentReviewer.take(1).subscribe((reviewer) => {
        this.reviewModel.reviewerid = reviewer.reviewerid;
      })
    })
  }

  onSubmit() {
    this.submitted = true;
  }

  onVerified() {
    this.verified = true;
    this.firebaseService.addReview(this.reviewModel);
  }
}
