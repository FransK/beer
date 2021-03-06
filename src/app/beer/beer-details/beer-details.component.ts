import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseService } from '../data/firebase.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html'
})
export class BeerDetailsComponent implements OnInit {
  beer : FirebaseObjectObservable<any>;

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.beer = this.route.params.map((params: Params) => this.firebaseService.getBeerById(params['beerid'])).switch();
  }

}
