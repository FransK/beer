import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseService } from '../data/firebase.service';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html'
})
export class BreweryComponent implements OnInit {
  brewery : FirebaseObjectObservable<any>;

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.brewery = this.route.params.map((params: Params) => this.firebaseService.getBreweryById(params['breweryid'])).switch();
  }

}
