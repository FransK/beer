import { Component, OnInit } from '@angular/core';
import { Beer } from '../../beer';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.html'
})
export class AddBeerComponent {
  submitted = false;
  beerModel = new Beer('', '', {}, '', '');
  breweries = ['Granville Island', 'Tree', 'Howe Sound'];
  characteristics = ['Hoppy', 'Simple', 'Complex'];
  types = ['IPA', 'Stout', 'Lager', 'Pale Ale'];

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.beerModel); }

  onSubmit() {
    this.submitted = true;
  }
}



  
                // <!--<input type="checkbox" name="Hoppy" value="on"> Hoppy 
                // <input type="checkbox" name="Easy-Drinking" value="on"> Easy Drinking
                // <input type="checkbox" name="Clean" value="on"> Clean
                // <input type="checkbox" name="Sweet" value="on"> Sweet
                // <input type="checkbox" name="Sour" value="on"> Sour
                // <input type="checkbox" name="Bitter" value="on"> Bitter
                // <input type="checkbox" name="Affordable" value="on"> Affordable
                // <input type="checkbox" name="Expensive" value="on"> Expensive
                // <input type="checkbox" name="Simple" value="on"> Simple
                // <input type="checkbox" name="Complex" value="on"> Complex-->
