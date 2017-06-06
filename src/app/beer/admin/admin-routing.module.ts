import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { AddBreweryComponent } from './add-brewery/add-brewery.component';
import { AddCharacteristicsComponent } from './add-characteristics/add-characteristics.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddReviewerComponent } from './add-reviewer/add-reviewer.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'add-beer', component: AddBeerComponent },
          { path: 'add-brewery', component: AddBreweryComponent },
          { path: 'add-characteristics', component: AddCharacteristicsComponent },
          { path: 'add-review', component: AddReviewComponent },
          { path: 'add-reviewer', component: AddReviewerComponent },
          { path: 'add-type', component: AddTypeComponent },
          { path: 'login', component: LoginComponent },
        ]
      }
    ]
  }
  
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