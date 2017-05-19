import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { RecentsComponent } from './recents/recents.component';

const routes: Routes = [
  { path: '', component: RecentsComponent },
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