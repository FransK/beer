import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { BeerComponent } from './beer.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BreweryComponent } from './beer-brewery/brewery.component';
import { MainComponent } from './beer-main/main.component';
import { ReviewComponent } from './beer-review/review.component';
import { ReviewerComponent } from './beer-reviewer/reviewer.component';
import { SearchComponent } from './beer-search/beer-search.component';

const routes: Routes = [
  {
    path: '',
    component: BeerComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: '/main', pathMatch: 'full' },
          { path: 'beer/:beerid', component: BeerDetailsComponent },
          { path: 'brewery/:breweryid', component: BreweryComponent },
          { path: 'login', component: LoginComponent },
          { path: 'main', component: MainComponent },
          { path: 'reviewer/:reviewerid', component: ReviewerComponent },
          { path: 'reviews/:beerid/:reviewerid', component: ReviewComponent },
          { path: 'search', component: SearchComponent },
          { path: 'admin', loadChildren: 'app/beer/admin/admin.module#AdminModule' },
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