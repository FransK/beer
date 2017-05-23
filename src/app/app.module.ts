import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Base modules and components
import { AppRoutingModule } from './app-routing.module';
import { BeerModule } from './beer/beer.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'brew-review'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
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
