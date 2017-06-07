import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseService } from './data/firebase.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: [
    './beer.component.css'
  ]
})
export class BeerComponent implements OnInit {
  currentReviewer: Observable<firebase.User>;

  constructor(private firebaseService: FirebaseService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      this.currentReviewer = user;
    });
  }

  onClickLogout() {
    this.firebaseService.logoutUser();
  }
}