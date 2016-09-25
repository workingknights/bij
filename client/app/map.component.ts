import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  BrowserModule
} from '@angular/platform-browser';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { Bar } from './bar';
import { BarService } from './bar.service';

@Component({
  selector: 'map',
  styles: [`
    .sebm-google-map-container {
      height: 800px;
      width: 700px;
    }
    `],
  template: `
    <h3>The "Good Beer" Map</h3>
		<sebm-google-map [latitude]="35.6693878" [longitude]="139.6012991" [zoom]="6" (mapClick)="mapClicked($event)">
      <sebm-google-map-marker
            *ngFor="let m of markers; let i = index"
            (markerClick)="clickedMarker(m.label, i)"
            [latitude]="m.lat"
            [longitude]="m.lng"
            [label]="m.label"
            [markerDraggable]="m.draggable"
            (dragEnd)="markerDragEnd(m, $event)"></sebm-google-map-marker>
		</sebm-google-map>
    `
})
export class MapComponent {

    mapClicked($event: MouseEvent) {
      this.markers.push({
       lat: $event.coords.lat,
       lng: $event.coords.lng,
       draggable: true
     });
    }

    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
      }

    markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
      draggable: true,
		  label: 'A'
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
      draggable: true,
		  label: 'B'
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
      draggable: true,
		  label: 'C'
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  draggable: boolean;
	label?: string;
}
