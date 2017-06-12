import { Component, OnInit } from '@angular/core';

import { Brewery } from '../../brewery';
import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-brewery',
  templateUrl: './add-brewery.html'
})
export class AddBreweryComponent {
  public errorMessage: string;

  submitted = false;
  breweryModel = new Brewery('', '', '');

  constructor(private firebaseService: FirebaseService) { }

  onSubmit() {
    this.firebaseService.addBrewery(this.breweryModel)
      .then(() => this.submitted = true)
      .catch(error => this.errorMessage = error.message);
  }
}
