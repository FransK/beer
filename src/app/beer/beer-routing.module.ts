import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { RecentsComponent } from './recents/recents.component';

const routes: Routes = [
  {
    path: '', component: RecentsComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BeerRoutingModule { }