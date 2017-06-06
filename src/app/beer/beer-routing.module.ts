import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerComponent } from './beer.component';
import { AdminComponent } from './admin/admin.component';
import { RecentsComponent } from './recents/recents.component';
import { ReviewComponent } from './review/review.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: BeerComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: '/recents', pathMatch: 'full' },
          { path: 'recents', component: RecentsComponent },
          { path: 'reviews/:beerid/:reviewerid', component: ReviewComponent },
          { path: 'admin', loadChildren: 'app/beer/admin/admin.module#AdminModule' },
          { path: 'login', component: LoginComponent },
        ]
      }
    ] },
  
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