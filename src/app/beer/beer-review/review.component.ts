import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/map';

import { FirebaseService } from '../data/firebase.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  beerid : string;
  reviewerid : string;
  beer : FirebaseObjectObservable<any>;
  brewery : FirebaseObjectObservable<any>;
  characteristics : FirebaseListObservable<any>;
  review : FirebaseObjectObservable<any>;
  reviewers : FirebaseListObservable<any>;

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() : void {
      this.beer = this.route.params.map((params: Params) => this.firebaseService.getBeerById(params['beerid'])).switch();
      this.brewery = this.beer.map(beer => this.firebaseService.getBreweryById(beer.brewery)).switch();
      this.characteristics = this.route.params.map((params: Params) => this.firebaseService.getCharacteristicsByBeerId(params['beerid'])).switch();
      this.review = this.route.params.map((params: Params) => this.firebaseService.getReview(params['beerid'], params['reviewerid'])).switch();
      this.reviewers = this.route.params.map((params: Params) => this.firebaseService.getReviewerById(params['reviewerid'])).switch();
  }

}