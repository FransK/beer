import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BeerRoutingModule } from './beer-routing.module';

import { BeerService } from './beer.service';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerThumbComponent } from './beer-thumb/beer-thumb.component';
import { RecentsComponent } from './recents/recents.component';

@NgModule({
  declarations: [
    BeerDetailsComponent,
    BeerThumbComponent,
    RecentsComponent,
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
