import { Component } from '@angular/core';

import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-characteristics',
  templateUrl: './add-characteristics.html'
})
export class AddCharacteristicsComponent {
  submitted = false;
  characteristic: string;

  constructor(private firebaseService: FirebaseService) { }

  onSubmit() {
    this.submitted = true;
    this.firebaseService.addCharacteristic(this.characteristic);
  }

}
