import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { FirebaseService } from '../data/firebase.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: FirebaseListObservable<any>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.features = this.firebaseService.getFeatures();
  }

}
