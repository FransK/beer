import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BeerRoutingModule } from './beer-routing.module';

import { BeerService } from './beer.service';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

@NgModule({
  declarations: [
    BeerDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BeerRoutingModule,
  ],
  exports: [
    BeerDetailsComponent,
  ],
  providers: [
    BeerService,
  ]
})
export class BeerModule { }
