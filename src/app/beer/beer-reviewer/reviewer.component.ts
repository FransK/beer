import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../data/firebase.service';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html'
})
export class ReviewerComponent implements OnInit {
  reviewers : FirebaseListObservable<any>;

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.reviewers = this.route.params.map((params: Params) => this.firebaseService.getReviewerById(params['reviewerid'])).switch();
  }

}
