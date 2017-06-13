import { Component, Pipe, PipeTransform, OnInit, OnDestroy } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FirebaseService } from '../data/firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'app-beer-search',
    templateUrl: './beer-search.component.html',
    styleUrls: [
        './beer-search.component.css'
    ]
})
export class SearchComponent implements OnInit, OnDestroy{
    beers: FirebaseListObservable<any>;
    characteristics: FirebaseListObservable<any>;
    reviewers: FirebaseListObservable<any>;
    types: FirebaseListObservable<any>;

    filteredBeers: Observable<any>;

    searchTerms = {
        text: {},
        characteristics: {},
        reviewers: {},
        types: {}
    };
    
    constructor(private firebaseService: FirebaseService) { }

    ngOnInit() {
        this.beers = this.firebaseService.getBeers();
        this.characteristics = this.firebaseService.getCharacteristics();
        this.reviewers = this.firebaseService.getReviewers();
        this.types = this.firebaseService.getTypes();

        this.onFilter();
    }

    ngOnDestroy() {
        // Unsubscribe here
    }

    onFilter() {
        this.filteredBeers = this.beers.map(beers => {
            let newBeers = this.filterTypes(beers);
            newBeers = this.filterCharacteristics(newBeers);
            return newBeers;
        });
    }

    filterCharacteristics(beers) : any {
        if ((<any>Object).values(this.searchTerms.characteristics).indexOf(true) === -1) {
            // Return the given list if we don't have any characteristics to filter
            return beers;
        } else {
            // Return only beers which match all given characteristics
            let searchCharacteristics = Object.keys(this.searchTerms.characteristics)
            searchCharacteristics = searchCharacteristics.filter(char => this.searchTerms.characteristics[char] === true);
            return beers.filter(beer => {
                if (!beer.hasOwnProperty('characteristics')) return false;

                let beerCharacteristics = Object.keys(beer.characteristics);
                beerCharacteristics = beerCharacteristics.filter(char => beer.characteristics[char] === true);
                let beerMatch = true;
                searchCharacteristics.forEach(character => {
                    if (beerCharacteristics.indexOf(character) === -1) {
                        beerMatch = false;
                        return;
                    }
                });
                return beerMatch;
            });
        }
    }

    filterReviewers(beers) : any {
        if ((<any>Object).values(this.searchTerms.reviewers).indexOf(true) === -1) {
            // Return the given list if we don't have any characteristics to filter
            return beers;
        } else {
        
        }
    }

    filterTypes(beers) : any {
        if ((<any>Object).values(this.searchTerms.types).indexOf(true) === -1) {
            return beers;
        } else {
            return beers.filter(beer => this.searchTerms.types[beer.type.toLowerCase()] === true);
        }
    }
}