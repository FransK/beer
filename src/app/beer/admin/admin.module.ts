import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminComponent } from './admin.component';
import { AddBeerComponent } from './add-beer/add-beer.component';
import { AddBreweryComponent } from './add-brewery/add-brewery.component';
import { AddCharacteristicsComponent } from './add-characteristics/add-characteristics.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AddReviewerComponent } from './add-reviewer/add-reviewer.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';

import { AdminRoutingModule } from './admin-routing.module';

import { ToolsModule } from '../../tools/tools.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ToolsModule,
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
        MyReviewsComponent
    ]
})
export class AdminModule {}