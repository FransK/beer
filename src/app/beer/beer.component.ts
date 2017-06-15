import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public navbarCollapsed = true;

  currentReviewer: Observable<firebase.User>;
  searchTerm = '';

  constructor(
    private firebaseService: FirebaseService,
    private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      this.currentReviewer = user;
    });
  }

  onClickLogout() {
    this.firebaseService.logoutUser();
  }

  onSubmitSearch() {
      this.router.navigate(['/search'], {queryParams: { 'text': this.searchTerm}});
  }
}