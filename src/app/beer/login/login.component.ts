import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

import { FirebaseService } from '../data/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent {
  submitted = false;
  email: string;
  password: string;
  user: firebase.Promise<any>;

  constructor(private firebaseService: FirebaseService) { }

  onSubmit() {
    this.user = this.firebaseService.loginUser(this.email, this.password);
    this.submitted = true;
  }

}
