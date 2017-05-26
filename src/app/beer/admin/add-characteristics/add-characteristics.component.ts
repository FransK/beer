import { Component } from '@angular/core';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
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
    
    //Add the characteristic
    this.firebaseService.addCharacteristic(this.characteristic);
  }

}
