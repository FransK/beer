import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';
import { BeerRoutingModule } from './beer-routing.module';

import { FirebaseService } from './data/firebase.service';

import { BeerComponent } from './beer.component';

import { MainComponent } from './beer-main/main.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerThumbComponent } from './beer-thumb/beer-thumb.component';
import { FeaturesComponent } from './features/features.component';
import { RecentsComponent } from "./recents/recents.component";
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    BeerRoutingModule,
    AdminModule,
  ],
  declarations: [
    BeerComponent,
    MainComponent,
    BeerDetailsComponent,
    BeerThumbComponent,
    FeaturesComponent,
    RecentsComponent,
    ReviewComponent,
    LoginComponent,
  ],
  exports: [
    BeerDetailsComponent,
  ],
  providers: [
    FirebaseService,
  ]
})
export class BeerModule { }
