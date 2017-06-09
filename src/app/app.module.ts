import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Base modules and components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerModule } from './beer/beer.module';
import { ToolsModule } from './tools/tools.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'brew-review'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ToolsModule,
    BeerModule,
    AppRoutingModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
