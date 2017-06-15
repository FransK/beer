import { Location } from "@angular/common";
import { Component, Pipe, PipeTransform, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FirebaseService } from '../data/firebase.service';
import { ObjectArrayPipe } from '../../tools/object-to-array.pipe';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'app-beer-search',
    templateUrl: './beer-search.component.html',
    styleUrls: [
        './beer-search.component.css'
    ]
})
export class SearchComponent implements OnInit{
    beers: FirebaseListObservable<any>;
    characteristics: FirebaseListObservable<any>;
    reviewers: FirebaseListObservable<any>;
    types: FirebaseListObservable<any>;

    filteredBeers: Observable<any>;

    searchTerms = {
        text: '',
        characteristics: {},
        reviewers: {},
        types: {}
    };
    
    constructor(private firebaseService: FirebaseService, private location: Location, private route: ActivatedRoute, private objectArrayPipe: ObjectArrayPipe) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => this.searchTerms.text = params['text'] || '');

        this.beers = this.firebaseService.getBeers();
        this.characteristics = this.firebaseService.getCharacteristics();
        this.reviewers = this.firebaseService.getReviewers();
        this.types = this.firebaseService.getTypes();

        this.onFilter();
    }

    onClearText() {
        this.searchTerms.text = '';
        this.onFilter();
    }

    onFilter() {
        this.location.replaceState('search?text=' + this.searchTerms.text);

        this.filteredBeers = this.beers.map(beers => {
            let newBeers = this.filterTypes(beers);
            newBeers = this.filterCharacteristics(newBeers);
            newBeers = this.filterReviewers(newBeers);
            newBeers = this.filterText(newBeers);
            return newBeers;
        });
    }

    filterCharacteristics(beers) : any {
        if ((<any>Object).values(this.searchTerms.characteristics).indexOf(true) === -1) {
            // Return the given list if we don't have any characteristics to filter
            return beers;
        } else {
            // Return only beers which match ALL given characteristics
            let searchCharacteristics = Object.keys(this.searchTerms.characteristics);
            searchCharacteristics = searchCharacteristics.filter(char => this.searchTerms.characteristics[char] === true);

            return beers.filter(beer => {
                if (!beer.hasOwnProperty('characteristics')) return false; // safety check so we don't error when grabbing keys

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
            // Return only beers which match ALL give reviewers
            let searchReviewers = Object.keys(this.searchTerms.reviewers);
            searchReviewers = searchReviewers.filter(reviewer => this.searchTerms.reviewers[reviewer] === true);

            return beers.filter(beer => {
                if (!beer.hasOwnProperty('reviewers')) return false; // safety check so we don't error when grabbing keys

                let beerReviewers = Object.keys(beer.reviewers);
                beerReviewers = beerReviewers.filter(reviewer => beer.reviewers[reviewer] === true);
                let beerMatch = true;
                searchReviewers.forEach(reviewer => {
                    if (beerReviewers.indexOf(reviewer) === -1) {
                        beerMatch = false;
                        return;
                    }
                });
                return beerMatch;
            });
        }
    }

    filterText(beers) : any {
        return beers.filter(beer => {
            if (beer.name.toLowerCase().indexOf(this.searchTerms.text.toLowerCase()) >= 0) {
                return true;
            }
            if (beer.type.toLowerCase().indexOf(this.searchTerms.text.toLowerCase()) >= 0) {
                return true;
            }
            this.objectArrayPipe.transform(beer.characteristics, []).forEach(character => {
                if (character.value) {
                    if (character.key.indexOf(this.searchTerms.text.toLowerCase()) >= 0) {
                        return true;
                    }
                }
            });
            return false;
        });
    }

    filterTypes(beers) : any {
        if ((<any>Object).values(this.searchTerms.types).indexOf(true) === -1) {
            return beers;
        } else {
            return beers.filter(beer => this.searchTerms.types[beer.type.toLowerCase()] === true);
        }
    }
}