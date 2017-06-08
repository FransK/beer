import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerComponent } from './beer.component';
import { MainComponent } from './beer-main/main.component';
import { FeaturesComponent } from './beer-features/features.component';
import { ReviewComponent } from './beer-review/review.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: BeerComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: '/main', pathMatch: 'full' },
          { path: 'main', component: MainComponent },
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