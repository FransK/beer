import { Component, OnInit } from '@angular/core';
import { Review } from '../../review';

import { FirebaseListObservable } from 'angularfire2/database';
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

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.beers = this.firebaseService.getBeers();
    this.reviewers = this.firebaseService.getReviewers();
  }

  onSubmit() {
    this.submitted = true;
  }

  onVerified() {
    this.verified = true;
    this.firebaseService.addReview(this.reviewModel);
  }
}
