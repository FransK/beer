import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { FirebaseService } from '../../data/firebase.service';

@Component({
    selector: 'app-my-reviews',
    templateUrl: 'my-reviews.component.html'
})
export class MyReviewsComponent implements OnInit {
    currentUser: Observable<firebase.User>;
    currentReviewer: FirebaseObjectObservable<any>;
    reviews: FirebaseListObservable<any>;
    reviewerid: string;

    constructor(private firebaseService: FirebaseService) { }

    ngOnInit(): void {
        this.currentUser = this.firebaseService.getCurrentUser();
        this.getReviewer();
    }

    getReviewer() {
        this.currentUser.take(1).subscribe((user) => {
            this.currentReviewer = this.firebaseService.getCurrentReviewer(user.uid);
            this.currentReviewer.take(1).subscribe((reviewer) => {
                this.reviewerid = reviewer.reviewerid;
                this.reviews = this.firebaseService.getReviewsByUser(user.uid);
            })
        })
    }
}