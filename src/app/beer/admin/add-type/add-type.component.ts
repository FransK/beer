import { Component } from '@angular/core';

import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseService } from '../../data/firebase.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.html'
})
export class AddTypeComponent {
  submitted = false;
  type: string;

  constructor(private firebaseService: FirebaseService) { }

  onSubmit() {
    this.submitted = true;
    
    //Add the characteristic
    this.firebaseService.addType(this.type);
  }

}
