import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdminRoutingModule } from './admin/admin-routing.module';
import { BeerRoutingModule } from './beer-routing.module';

import { FirebaseService } from './data/firebase.service';
import { BeerService } from './beer.service';

import { AddBeerComponent } from './admin/add-beer/add-beer.component';
import { AddBreweryComponent } from './admin/add-brewery/add-brewery.component';
import { AddCharacteristicsComponent } from './admin/add-characteristics/add-characteristics.component';
import { AddReviewComponent } from './admin/add-review/add-review.component';
import { AddReviewerComponent } from './admin/add-reviewer/add-reviewer.component';
import { AddTypeComponent } from './admin/add-type/add-type.component';
import { AdminComponent } from './admin/admin.component';

import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerThumbComponent } from './beer-thumb/beer-thumb.component';
import { RecentsComponent } from './recents/recents.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddBeerComponent,
    AddBreweryComponent,
    AddCharacteristicsComponent,
    AddReviewComponent,
    AddReviewerComponent,
    AddTypeComponent,
    BeerDetailsComponent,
    BeerThumbComponent,
    RecentsComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule,
    BeerRoutingModule,
  ],
  exports: [
    BeerDetailsComponent,
  ],
  providers: [
    FirebaseService,
    BeerService,
  ]
})
export class BeerModule { }
