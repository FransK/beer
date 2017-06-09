import { Component, Input } from "@angular/core";

import { Review } from "../../review";

@Component({
    selector: 'app-single-feature',
    templateUrl: './single-feature.component.html',
    styleUrls: [
        './single-feature.component.css'
    ]
})
export class SingleFeatureComponent {
    @Input() review: Review;

}