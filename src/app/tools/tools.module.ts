import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqualValidator } from './equal-validator.directive';
import { ObjectArrayPipe } from './object-to-arry.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    EqualValidator,
    ObjectArrayPipe
    ],
  exports: [
    EqualValidator,
    ObjectArrayPipe,
    CommonModule
    ]
})
export class ToolsModule { }