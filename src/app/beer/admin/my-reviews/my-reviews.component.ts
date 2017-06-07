import { Component, OnInit } from "@angular/core";

import { FirebaseService } from '../../data/firebase.service';

@Component({
    selector: 'app-my-reviews',
    templateUrl: 'my-reviews.component.html'
})
export class MyReviewsComponent implements OnInit {
    constructor(private firebaseService: FirebaseService) { }

    ngOnInit(): void {
        
    }
}