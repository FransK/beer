import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { RecentsComponent } from './recents/recents.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component: RecentsComponent },
  { path: 'reviews/:beerid/:reviewerid', component: ReviewComponent },
  { path: 'admin', component: AdminComponent },
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