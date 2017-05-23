import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';

import { FirebaseService } from '../data/firebase.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review : FirebaseObjectObservable<any>;

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() : void {
      this.route.params
            .switchMap((params: Params) => this.firebaseService.getReview(params['beerid'], params['reviewerid']))
            .subscribe(review => this.review = review);
  }

}