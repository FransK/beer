import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdminModule } from './admin/admin.module';
import { BeerRoutingModule } from './beer-routing.module';

import { FirebaseService } from './data/firebase.service';

import { BeerComponent } from './beer.component';

import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerThumbComponent } from './beer-thumb/beer-thumb.component';
import { RecentsComponent } from './recents/recents.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BeerRoutingModule,
    AdminModule,
  ],
  declarations: [
    BeerComponent,
    BeerDetailsComponent,
    BeerThumbComponent,
    RecentsComponent,
    ReviewComponent
  ],
  exports: [
    BeerDetailsComponent,
  ],
  providers: [
    FirebaseService,
  ]
})
export class BeerModule { }
