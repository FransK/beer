import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../data/firebase.service';

@Component({
    selector: 'app-recents',
    templateUrl: './recents.component.html',
    styleUrls: [
        './recents.component.css'
    ]
})
export class RecentsComponent {
    recents: FirebaseListObservable<any>;

    constructor(private firebaseService: FirebaseService) { }

    ngOnInit() {
        this.recents = this.firebaseService.getNRecentReviews(1);
    }
}