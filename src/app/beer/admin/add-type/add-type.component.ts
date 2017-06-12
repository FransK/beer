import { Component } from '@angular/core';

import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.html'
})
export class AddTypeComponent {
  public errorMessage: string;
  
  submitted = false;
  type: string;

  constructor(private firebaseService: FirebaseService) { }

  onSubmit() {
    this.firebaseService.addType(this.type)
      .then(() => this.submitted = true)
      .catch(error => this.errorMessage = error.message);
  }

}
