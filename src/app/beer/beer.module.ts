import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';
import { BeerRoutingModule } from './beer-routing.module';
import { ToolsModule } from '../tools/tools.module';

import { FirebaseService } from './data/firebase.service';
import { ObjectArrayPipe } from '../tools/object-to-array.pipe';

import { BeerComponent } from './beer.component';

import { MainComponent } from './beer-main/main.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerThumbComponent } from './beer-thumb/beer-thumb.component';
import { BreweryComponent } from './beer-brewery/brewery.component';
import { FeaturesComponent } from './beer-features/features.component';
import { SingleFeatureComponent } from './beer-features/single-feature/single-feature.component';
import { RecentsComponent } from './beer-recents/recents.component';
import { ReviewComponent } from './beer-review/review.component';
import { ReviewerComponent } from './beer-reviewer/reviewer.component';
import { SearchComponent } from './beer-search/beer-search.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    BeerRoutingModule,
    AdminModule,
    ToolsModule
  ],
  declarations: [
    BeerComponent,
    MainComponent,
    BeerDetailsComponent,
    BeerThumbComponent,
    BreweryComponent,
    FeaturesComponent,
    SingleFeatureComponent,
    RecentsComponent,
    ReviewComponent,
    ReviewerComponent,
    SearchComponent,
    LoginComponent
  ],
  exports: [  ],
  providers: [
    FirebaseService,
    ObjectArrayPipe
  ]
})
export class BeerModule { }
