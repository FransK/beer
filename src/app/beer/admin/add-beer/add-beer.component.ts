import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Beer } from '../../beer';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.html'
})
export class AddBeerComponent implements OnInit, AfterViewChecked {
  beerForm: NgForm;
  @ViewChild('beerForm') currentForm: NgForm;

  submitted = false;
  verified = false;
  beerModel = new Beer('', '', {}, '', '');
  breweries: FirebaseListObservable<any>;
  characteristics: FirebaseListObservable<any>;
  types: FirebaseListObservable<any>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.breweries = this.firebaseService.getBreweries();
    this.characteristics = this.firebaseService.getCharacteristics();
    this.types = this.firebaseService.getTypes();
  }

  onSubmit() {
    this.submitted = true;
  }

  onVerified() {
    this.firebaseService.addBeer(this.beerModel);
    this.verified = true;
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.beerForm) { return; }
    this.beerForm = this.currentForm;
    if (this.beerForm) {
      this.beerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.beerForm) { return; }
    const form = this.beerForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'beerid': '',
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 40 characters long.',
      'pattern' : 'Name must be alphanumeric with only spaces between words.'
    },
    'beerid': {
      'required': 'beerid is required.',
      'maxlength': 'beerid cannot be more than 15 characters long.',
      'pattern': 'beerid can contain only letters and numbers.'
    }
  };
}
