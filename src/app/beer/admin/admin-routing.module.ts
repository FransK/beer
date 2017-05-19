import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBeerComponent } from './add-beer/add-beer.component';
import { AddBreweryComponent } from './add-brewery/add-brewery.component';
import { AddCharacteristicsComponent } from './add-characteristics/add-characteristics.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddReviewerComponent } from './add-reviewer/add-reviewer.component';
import { AddTypeComponent } from './add-type/add-type.component';

const routes: Routes = [
  { path: 'admin/add-beer', component: AddBeerComponent },
  { path: 'admin/add-brewery', component: AddBreweryComponent },
  { path: 'admin/add-characteristics', component: AddCharacteristicsComponent },
  { path: 'admin/add-review', component: AddReviewComponent },
  { path: 'admin/add-reviewer', component: AddReviewerComponent },
  { path: 'admin/add-type', component: AddTypeComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }