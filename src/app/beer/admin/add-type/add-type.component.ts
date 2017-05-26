import { Component } from '@angular/core';

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
    this.firebaseService.addType(this.type);
  }

}
