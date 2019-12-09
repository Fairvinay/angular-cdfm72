import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
 
  styles: ['agm-map { height: 300px; /* height is required */ }'],
  template: `
		<agm-map 
			[latitude]='latitude'
			[longitude]='longitude'
			[zoom]='2'
			(mapClick)='addMarker($event.coords.lat, $event.coords.lng)'>
			<agm-marker
				*ngFor='let marker of markers'
				[latitude]='marker.lat'
				[longitude]='marker.lng'
				[opacity]='marker.alpha'
				[markerDraggable]='true'
				(markerClick)='selectMarker($event)'
				>
			</agm-marker>
			<agm-rectangle 
				[north]='max("lat")'
				[east]='max("lng")'
				[south]='min("lat")'
				[west]='min("lng")'>
			</agm-rectangle>
		</agm-map>
		<p *ngIf='selectedMarker'>Lat: {{ selectedMarker.lat }} Lng: {{ selectedMarker.lng }}</p>
	`
  
  
})
export class HelloComponent  {
  @Input() name: string;
}
