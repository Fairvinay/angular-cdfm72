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
 lat = 43.879078;
  lng = -103.4615581;
  selectedMarker;
  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    // 	
    { lat: 44.1822059, lng: -114.506836, alpha: 1 },
    { lat: 35.92658, lng: -102.05228, alpha: 1 },
    { lat: 48.75606, lng: -103.85900, alpha: 1 },
    { lat: 43.19334, lng: -98.03352, alpha: 1 },
    { lat: 56.09407, lng: -88.31618, alpha: 1 },
    { lat: 47.92393, lng: -99.58339, alpha: 1 }
  ];

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 0.4 });
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }



}
