import { Component, Input } from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Review } from "../../review";

@Component({
    selector: 'app-single-feature',
    templateUrl: './single-feature.component.html',
    styleUrls: [
        './single-feature.component.css'
    ],
    animations: [
        trigger('animHover', [
            state('no-hover', style({
                transform: 'scale(1) translateY(0)'
            })),
            state('hover', style({
                transform: 'scale(1.05) translateY(10px)'
            })),
            transition('no-hover => hover', animate('200ms ease-in')),
            transition('hover => no-hover', animate('200ms ease-out'))
        ])
    ]
})
export class SingleFeatureComponent {
    @Input() review: Review;
    hover = 'no-hover'

    mouseEnter() {
        this.hover = 'hover';
    }

    mouseLeave() {
        this.hover = 'no-hover';
    }
}