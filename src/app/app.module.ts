import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { BeerModule } from './beer/beer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BeerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
