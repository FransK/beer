import { Component } from '@angular/core';

import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-characteristics',
  templateUrl: './add-characteristics.html'
})
export class AddCharacteristicsComponent {
  public errorMessage: string;

  submitted = false;
  characteristic: string;

  constructor(private firebaseService: FirebaseService) { }

  onSubmit() {
    this.firebaseService.addCharacteristic(this.characteristic)
      .then(() => this.submitted = true)
      .catch(error => this.errorMessage = error.message);
  }

}
