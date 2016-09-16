import './rxjs-extensions';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'node_modules/angular2-google-maps/core/core-module';

import { AppComponent }   from './app.component';
import { BarsComponent }      from './bars.component';
import { HomeComponent }      from './home.component';
import { BarFormComponent }      from './bar-form.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJWqITNwcMAW7GijYNYiGWBmIrysESOCc'
    })
  ],
  providers: [],
  declarations: [
    AppComponent,
    HomeComponent,
    BarsComponent,
    BarFormComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
