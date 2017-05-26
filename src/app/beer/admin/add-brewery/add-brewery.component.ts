import { Component, OnInit } from '@angular/core';

import { Brewery } from '../../brewery';
import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-brewery',
  templateUrl: './add-brewery.html'
})
export class AddBreweryComponent {
  submitted = false;
  breweryModel = new Brewery('', '', '');

  constructor(private firebaseService: FirebaseService) { }

  onSubmit() {
    this.submitted = true;
    this.firebaseService.addBrewery(this.breweryModel);
  }
}
