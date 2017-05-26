import { Component, OnInit } from '@angular/core';

import { Reviewer } from '../../reviewer';
import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-reviewer',
  templateUrl: './add-reviewer.html'
})
export class AddReviewerComponent {
  submitted = false;
  reviewerModel = new Reviewer('', '');

  constructor(private firebaseService: FirebaseService) { }

  onSubmit() {
    this.submitted = true;
    this.firebaseService.addReviewer(this.reviewerModel);
  }
}
