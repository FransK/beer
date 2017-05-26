import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { AddBreweryComponent } from './add-brewery/add-brewery.component';
import { AddCharacteristicsComponent } from './add-characteristics/add-characteristics.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddReviewerComponent } from './add-reviewer/add-reviewer.component';
import { AddTypeComponent } from './add-type/add-type.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        AddBeerComponent,
        AddBreweryComponent,
        AddCharacteristicsComponent,
        AddReviewComponent,
        AddReviewerComponent,
        AddTypeComponent,
    ]
})
export class AdminModule {}