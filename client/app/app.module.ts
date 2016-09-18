import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent }   from './app.component';
import { BarsComponent }      from './bars.component';
import { HomeComponent }      from './home.component';
import { BarDetailComponent } from './bar-detail.component';
import { BarFormComponent }      from './bar-form.component';
import { BarService }      from './bar.service';
import { routing } from './app.routing';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    AgmCoreModule.forRoot()
    // AgmCoreModule.forRoot({apiKey: 'AIzaSyBJWqITNwcMAW7GijYNYiGWBmIrysESOCc'})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    BarsComponent,
    BarDetailComponent,
    BarFormComponent
  ],
  providers: [
    BarService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
